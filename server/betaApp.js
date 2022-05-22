/**
 * CSE 403 Spring 2022
 *
 * Copyright ©2022 All rights reserved.
 *      - Aedan McCall          aedanmc (at) uw.edu
 *      - Alex Zúñiga           mzuniga (at) uw.edu
 *      - Camila Christensen    camilyo (at) cs.washington.edu
 *      - Matt Broom            matty162 (at) uw.edu
 *      - Michael Harris        micha06 (at) uw.edu
 *
 * Server side API for Travelo-Hey!
 *
 * Requires:
 *   - express:     Required to use the express framework
 *   - cors:        Required for axios front-end calls
 *   - fs:          Required to access local data file
 *   - multer:      Required for for multipart/form-data
 *   - dotenv:      Required to read .env environment variables
 */

(function() {
    "use strict";

    /***************/
    /** CONSTANTS **/
    /***************/

    const PORT_8000 = "8000";
    const PORT_8080 = "8080";
    const PLACES_DETAILS_BASE_URL = "https://maps.googleapis.com/maps/api/place/details/";
    const PLACES_TEXTSEARCH_BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/";

    /*************/
    /** IMPORTS **/
    /*************/

    const express = require("express");
    const app = express();
    const cors = require("cors");
    const fs = require("fs").promises;
    const multer = require("multer");
    const https = require("https");
    require('dotenv').config();
    const instance = require('./db_connection');

    app.use(express.urlencoded({extended: true}));    // for application/x-www-form-urlencoded
    app.use(express.json());                                  // for application/json
    app.use(multer().none());                                 // for multipart/form-data
    app.use(cors());                                          // for network authorization

    /***************/
    /** ENDPOINTS **/
    /***************/

    /**
     * Retrieves a list of all activities. Returns in JSON format.
     */
    app.get('/activities', async (req, res) => {
        try {
            const activities = await fs.readFile("data/activities.json", "utf8");
            res.type("json").send(activities);
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Endpoint that calls the Google Places API, retrieving more specific details for the given
     * place_id of a business. Returns in JSON format.
     */
    app.get('/business', async (req, res) => {
        try {
            const place_id = req.body.place_id;
            if (place_id) {
                const query = "json?place_id=" + place_id + "&key=" + process.env.PLACES_KEY;
                console.log(PLACES_DETAILS_BASE_URL + query);
                const request = https.get(PLACES_DETAILS_BASE_URL + query, (response) => {
                    let data = '';
                    response.on('data', (chunk) => {
                        data += chunk;
                    });
                }).on('error', (error) => {
                    res.type("text").status(500).send(error);
                }).end();
                res.type("json").send(request);
            } else {
                res.type("text").status(400)
                  .send("Missing place ID");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Retrieves a list of all cities in the database for the given state. Returns in JSON format.
     */
    app.post('/cities', async (req, res) => {
        try {
            const state = req.body.state;

            if (state) {
                const cities = await getCities(state);
                res.type("json").send({"cities": cities});
            } else {
                res.type("text").status(400)
                  .send("Missing state");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Retrieves a list of all countries in the database. Returns in JSON format.
     */
    app.get('/countries', async (req, res) => {
        try {
            const countries = await getCountriesName();
            res.type("json").send({"countries": countries});
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Returns the country safety values for the given address. Address should be the formatted
     * address provided from a previous Google Places API call. Returns in JSON format.
     */
    app.get('/country', async (req, res) => {
        try {
            const form_addr = req.body.form_addr;
            if (form_addr) {
                const country = await getCountry(form_addr);
                res.type("json").send({"country": country});
            } else {
                res.type("text").status(400)
                  .send("Missing formatted address");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Endpoint retrieving Travelo-Hey specific reviews for the given place_id.
     * Returns in JSON format.
     */
    app.get('/reviews', async (req, res) => {
        try {
            const place_id = req.body.place_id;
            if (place_id) {
                const reviews = await getReviews(place_id);
                res.type("json").send({"th_reviews": reviews});
            } else {
                res.type("text").status(400)
                  .send("Missing place ID.");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Saves a new review in the database for the given business. Returns the review in JSON format.
     */
    app.post('/reviews/new', async (req, res) => {
        try {
            const review_params = [
                req.body.userID, req.body.place_id, new Date().toUTCString(), req.body.inclusiveLanguages,
                req.body.neutralRestroom, req.body.queerBusinessPromotion, req.body.accessibility,
                req.body.queerSignage, req.body.safety, req.body.recommendedBusiness, req.body.review
            ];

            if (review_params[0] && review_params[1]) {
                const review = await writeReviews(review_params);
                res.type("json").send(review);
            } else {
                res.type("text").status(400)
                  .send("Missing user ID or place ID");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Endpoint that calls Google Places API to retrieve local businesses relative to the provided
     * activity for the provided city. Returns in JSON format.
     */
    app.get('/search', async (req, res) => {
        try {
            const activity = req.body.activity;
            const city = req.body.city;

            if (city && activity) {
                // obtain lat long
                const latLong = await getLatLong(city);
                const latLongString = "" + latLong[0].latitude + "," + latLong[0].longitude;

                // query Google Places API
                const query = "json?query=" + activity + "&location=" + latLongString + "&key=" + process.env.PLACES_KEY;
                https.request(PLACES_TEXTSEARCH_BASE_URL + query, (response) => {
                    let data = '';
                    response.on('data', (chunk) => {
                        data += chunk;
                    });

                    response.on('end', () => {
                        res.type("json").send(data);
                    })
                }).on('error', (error) => {
                    res.type("text").status(500)
                      .send(error);
                }).end();
            } else {
                res.type("text").status(400)
                  .send("Missing city or activity");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    /**
     * Retrieves a list of all states in the database for the given country. Returns in JSON format.
     */
    app.post('/states', async (req, res) => {
        try {
            const country = req.body.country;

            if (country) {
                const state = await getStates(country);
                res.type("json").send({"states": state});
            } else {
                res.type("text").status(400)
                  .send("Missing country");
            }
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    /**********************/
    /** HELPER FUNCTIONS **/
    /**********************/

    /**
     * Helper function to retrieve the city names from the database.
     *
     * @param state                 state for which to query
     * @returns {Promise<any[]>}    city object for the given state
     */
    async function getCities(state) {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM cities WHERE state_name = ? ORDER BY name";

        const row = await db.all(query, [state]);
        await db.close();
        return row;
    }

    /**
     * Helper function to retrieve all of the countries names from the database.
     *
     * @returns {Promise<any[]>}    countries object in the database
     */
    async function getCountriesName() {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM countries ORDER BY name";

        const row = await db.all(query, []);
        await db.close();
        return row;
    }

    /**
     * Helper function to retrieve country information from the database.
     *
     * @param form_addr             the address of a business
     * @returns {Promise<any[]>}    the promise of results of countries
     */
    async function getCountry(form_addr) {
        // split form_addr to get countries acronym
        const addr = form_addr.split(", ");
        const country = addr[addr.length-1];

        const db = await instance.getDBConnection();
        const query = "SELECT * FROM countries " +
          "WHERE name = ?;";

        const row = await db.all(query, [country]);
        await db.close();
        return row;
    }

    /**
     * Helper function to retrieve the latitude and longitude values for a given city.
     *
     * @param city                  city for which to query
     * @returns {Promise<any[]>}    latitude and longitude object for the given city
     */
    async function getLatLong(city) {
        const db = await instance.getDBConnection();
        const query = "SELECT latitude, longitude FROM cities WHERE name = ?";

        const row = await db.all(query, [city]);
        await db.close();
        return row;
    }

    /**
     * Helper function to retrieve business reviews from the database.
     *
     * @param place_id              a unique identifier for a business
     * @returns {Promise<any[]>}    the promise of results of reviews
     */
    async function getReviews(place_id) {
        const db = await instance.getDBConnection();
        const query = "SELECT * FROM reviews " +
          "WHERE placeId = ?;";
        const rows = db.all(query, [place_id]);
        await db.close();
        return rows;
    }

    /**
     * Helper function to retrieve the state names from the database.
     * @param country                country for which to query
     * @returns {Promise<any[]>}     state object for the given country
     */
    async function getStates(country) {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM states WHERE country_name = ? ORDER BY name";

        const row = await db.all(query, [country]);
        await db.close();
        return row;
    }

    /**
     * Helper function to add a new review to the database.
     *
     * @param review_params         the array of parameters to be stored in the database
     * @returns {Promise<any[]>}    the promise of results after the review has been added
     */
    async function writeReviews(review_params) {
        const db = await instance.getDBConnection();
        const query_insert = "INSERT INTO reviews" +
          "(userID, placeID, createdAt, inclusiveLanguages, neutralRestrooms, queerBusinessPromotion, " +
          "accessibility, queerSignage, safety, recommendedBusiness, review) " +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        await db.run(query_insert, review_params);
        const query_select = "SELECT * FROM reviews " +
                            "WHERE placeID = ? ORDER BY createdAt ASC";

        const placeID = review_params[1];
        const rows = await db.all(query_select, [placeID]);
        await db.close();
        return rows;
    }

    /******************/
    /** SERVER SETUP **/
    /******************/

    const port = parseInt(PORT_8080 || PORT_8000, 10);
    let server = app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static('../front-end/build'));

    module.exports.getCountry = getCountry;
    module.exports.getReviews = getReviews;
    module.exports.betaApp = server;
})();