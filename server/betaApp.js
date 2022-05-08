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
            const rows = await getTopLocations();
            res.type("json").send(rows);
        } catch (error) {
            res.type("text").status(500)
                .send(error.message);
        }
    });

    app.get('/business/:name', async (req, res) => {
        try {
            const busName = req.params.name;
            if (busName) {
                const rows = await getBusiness(busName);
                res.type("json").send(rows);
            } else {
                res.type("text").send("No name given");
            }
        } catch (error) {
            res.type("text").status(500)
                .send(error);
        }
    });

    /** HELPER FUNCTIONS **/
    async function getTopLocations() {
        const db = await getDBConnection();
        const query = "SELECT * FROM businesses;";
        const rows = await db.get(query);
        await db.close();
        return rows;
    }

    async function getBusiness(name) {
        const db = await getDBConnection();
        const query = "SELECT * FROM businesses " +
            "WHERE name = ?;";
        const rows = await db.all(query, [name]);
        await db.close();
        return rows;
    }

    /** SERVER SETUP **/
    const port = parseInt(process.env.PORT || PORT_8000, 10);
    app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static("../front-end/public/"));
})();