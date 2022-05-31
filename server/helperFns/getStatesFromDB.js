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
 * Helper function to retrieve the state names from the database.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to retrieve the state names from the database.
 *
 * @param country                country for which to query
 * @returns {Promise<any[]>}     state object for the given country
 */
async function getStatesFromDB(country) {
    const db = await instance.getDBConnection();
    const query = "SELECT name FROM states WHERE country_name = ? ORDER BY name";

    const row = await db.all(query, [country]);
    await db.close();
    return row;
}

module.exports.getStatesFromDB = getStatesFromDB;