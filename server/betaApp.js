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
    const PORT_8000 = "8000";
    const PORT_8080 = "8080";
    const PLACES_BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/";

    const express = require("express");
    const cors = require("cors");
    const fs = require("fs").promises;
    const multer = require("multer");
    const https = require("https");
    require('dotenv').config();

    const app = express();

    app.use(express.urlencoded({extended: true}));  // for application/x-www-form-urlencoded
    app.use(express.json());                                // for application/json
    app.use(multer().none());                               // for multipart/form-data

    /**
     * Establishes a database connection to the travelo-hey database and returns the database object.
     * Any errors that occur should be caught in the function that calls this one.
     * @returns {Object} - The database object for the connection.
     */
    const instance = require('./db_connection');

    /**
     * // setup instructions
     * // https://developers.google.com/maps/documentation/javascript/places#place_details
     * Google API Call
     * <script async
     *     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap">
     * </script>
     */

    // https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
    // output: json or xml
    // parameters:
    //      required:
    //          input={activity}&
    //          inputtype=textquery or phonenumber
    //          fields=
    //          key={.env key}

    // https://maps.googleapis.com/maps/api/place/textsearch/json?query={activity}&location={lat/long}&key={.env key}
    // https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels&location=-22.92008,-43.33069&key={.env key}

    // https://maps.googleapis.com/maps/api/place/details/output?parameters
    // output: json or xml
    // parameters: place_id=

    app.use(cors());
    // TODO: pulling restaurants in seattle
    app.get('/', async (req, res) => {
        try {
            let data = await fs.readFile("data/businesses.json", "utf8");
            res.type("json").send(data);

        } catch (err) {
            console.error(err);
        }
    });

    app.get('/search', async (req, res) => {
        try {
            const city = req.body.city;
            const activity = req.body.activity;

            if (city && activity) {
                // obtain lat long
                const latLong = await getLatLong(city);
                const latLongString = "" + latLong[0].latitude + "," + latLong[0].longitude;

                // fetch api
                const query = "json?query=" + activity + "&location=" + latLongString + "&key=" + process.env.PLACES_KEY;
                const request = https.request(PLACES_BASE_URL + query, (response) => {
                    let data = '';
                    response.on('data', (chunk) => {
                        data = data + chunk.toString();
                    });
                })

                request.on('error', (error) => {
                    res.type("text").status(500).send(error);
                });
                request.end()

                res.type("json").send(request);
            } else {
                res.type("text").status(400).send("Bad city or activity.");
            }
        } catch (error) {
            res.type("text").status(500).send(error);
        }
    });

    // countries, states, cities, activities
    // used for populating drop down menus
    app.get('/countries', async (req, res) => {
        try {
            const countries = await getCountriesName();

            res.type("json").send(countries);
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    app.post('/states', async (req, res) => {
        try {
            const country = req.body.country;

            if (country) {
                const state = await getStates(country);
                res.type("json").send({"state": state});
            }
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    app.post('/cities', async (req, res) => {
        try {
            const state = req.body.state;

            if (state) {
                const cities = await getCities(state);
                res.type("json").send({"cities": cities});
            }
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    app.get('/activities', async (req, res) => {
        try {
            let activities = await fs.readFile("data/activities.json", "utf8");
            res.type("json").send({"activities": activities});
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    // TODO: incorpoating Google Places API to retrieve details based on place_id
    app.get('/business', async (req, res) => {
        try {
            // const place_id = req.query.place_id;     // for testing outside of front-end
            // const form_addr = req.query.form_addr;   // for testing outside of front-end
            const place_id = req.body.place_id;
            const form_addr = req.body.form_addr;
            if (place_id && form_addr) {
                const reviews = await getReviews(place_id);
                const country = await getCountry(form_addr);
                res.type("json").send({"reviews": reviews, "country": country});
            } else {
                res.type("text").send("Missing ID and/or address.");
            }
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    app.get('/country', async (req, res) => {
        try {
            // const form_addr = req.query.form_addr;   // for testing outside of front-end
            const form_addr = req.body.form_addr;
            if (form_addr) {
                const country = await getCountry(form_addr);
                res.type("json").send({"country": country});
            } else {
                res.type("text").send("Missing country's name.");
            }
        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });

    app.post('/reviews/new', async(req, res) => {
        try {
            const review_params = [
                req.body.userID, req.body.placeID, new Date().toUTCString(), req.body.inclusiveLanguages,
                req.body.neutralRestroom, req.body.queerBusinessPromotion, req.body.accessibility,
                req.body.queerSignage, req.body.safety, req.body.recommendedBusiness, req.body.review
            ];

            if (review_params[0] && review_params[1]) {
                const review = await writeReviews(review_params);
                res.type("json").send(review);
            } else {
                res.type("text").send("Missing ...");
            }

        } catch (error) {
            res.type("text").status(500)
              .send(error);
        }
    });


    async function getLatLong(city) {
        const db = await instance.getDBConnection();
        const query = "SELECT latitude, longitude FROM cities WHERE name = ?";

        const row = await db.all(query, [city]);
        await db.close();
        return row;
    }

    /**
     *
     * @returns {Promise<any[]>}
     */
    async function getStates(country) {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM states WHERE country_name = ? ORDER BY name ASC";

        const row = await db.all(query, [country]);
        await db.close();
        return row;
    }

    /**
     *
     * @returns {Promise<any[]>}
     */
    async function getCities(state) {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM cities WHERE state_name = ? ORDER BY name ASC";

        const row = await db.all(query, [state]);
        await db.close();
        return row;
    }

    /**
     *
     * @returns {Promise<any[]>}
     */
    async function getCountriesName() {
        const db = await instance.getDBConnection();
        const query = "SELECT name FROM countries ORDER BY name ASC";

        const row = await db.all(query, []);
        await db.close();
        return row;
    }

    /** HELPER FUNCTIONS **/
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
     * Helper function to retrieve business reviews from the database.
     *
     * @param place_id             a unique identifier for a business
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

    /** SERVER SETUP **/
    const port = parseInt(PORT_8080 || PORT_8000, 10);
    let server = app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static('../front-end/build'));

    module.exports.getCountry = getCountry;
    module.exports.getReviews = getReviews;
    module.exports.betaApp = server;
})();