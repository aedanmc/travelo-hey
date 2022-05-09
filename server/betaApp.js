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
 *   - multer:      Required for for multipart/form-data
 *   - sqlite:      Required for local database access
 *   - sqlite3:     Required for local database access
 *   - dotenv:      Required to read .env environment variables
 */

(function() {
    "use strict";
    const PORT_8000 = 8000;

    const express = require("express");
    const fs = require("fs").promises;
    const multer = require("multer");
    const sqlite = require("sqlite");
    const sqlite3 = require("sqlite3").verbose();
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
    async function getDBConnection() {
        return await sqlite.open({
            filename: process.env.LOCAL_DB_NAME,
            driver: sqlite3.Database
        });
    }

    /**
     * // setup instructions
     * // https://developers.google.com/maps/documentation/javascript/places#place_details
     * Google API Call
     * <script async
     *     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap">
     * </script>
     */

    app.get('/', async (req, res) => {
        try {
            let data = await fs.readFile("../front-end/data/businesses.json", "utf8");
            res.type("json").send(data);
        } catch (err) {
            console.error(err);
        }
    });

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

    /** HELPER FUNCTIONS **/
    /**
     *
     * @param form_addr
     * @returns {Promise<any[]>}
     */
    async function getCountry(form_addr) {
        // split form_addr
        const addr = form_addr.split(", ");
        const country = addr[addr.length-1];

        const db = await getDBConnection();
        const query = "SELECT * FROM countries " +
            "WHERE name = ?;";

        const row = await db.all(query, [country]);
        await db.close();
        return row;
    }

    /**
     *
     * @param places_id
     * @returns {Promise<any[]>}
     */
    async function getReviews(place_id) {
        const db = await getDBConnection();
        const query = "SELECT * FROM reviews " +
            "WHERE placeId = ?;";
        const rows = db.all(query, [place_id]);
        await db.close();
        return rows;
    }

    /** SERVER SETUP **/
    const port = parseInt(process.env.PORT || PORT_8000, 10);
    app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static("build"));
})();