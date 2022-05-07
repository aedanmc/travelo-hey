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
 * Server side API for Travelo-Hey! Main entry to setup port for listening and begin main app.
 *
 * Requires:
 *   - './app':  Main application handling routes
 *   - express:  Required to use the express framework
 */

(function() {
    "use strict";
    const PORT_8000 = 8000;

    const express = require("express");
    const sqlite = require("sqlite");
    const sqlite3 = require("sqlite3");
    const app = express();
    require('dotenv').config();

    const DB_NAME = "travelo-hey.db";
    /**
     * Establishes a database connection to the travelo-hey database and returns the database object.
     * Any errors that occur should be caught in the function that calls this one.
     * @returns {Object} - The database object for the connection.
     */
    async function getDBConnection() {
        return await sqlite.open({
            filename: DB_NAME,
            driver: sqlite3.Database
        });
    }



    /** HELPER FUNCTIONS **/
    async function dbHasUser(user) {
        let result = false;
        const db = await getDBConnection();
        const query = "SELECT name FROM users " +
            "WHERE name = ?";
        const rows = await db.all(query, [user]);
        if (rows.length) {
            result = true;
        }
        db.close();
        return result;
    }

    /** SERVER SETUP **/
    const port = parseInt(process.env.PORT || PORT_8000, 10);
    app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static("../front-end/public/"));
})();