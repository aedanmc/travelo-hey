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
 * The db_connection.js creates a database connection to the local Sqlite database instance
 *
 * Requires:
 *   - sqlite and sqlite3:    Required to connect to database
 */

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3").verbose();

async function getDBConnection() {
    return await sqlite.open({
        filename: "data/travelo-hey.db",
        driver: sqlite3.Database
    });
}

module.exports.getDBConnection = getDBConnection;
