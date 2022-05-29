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
 * Helper function to retrieve all of the countries names from the database.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to retrieve all of the countries names from the database.
 *
 * @returns {Promise<any[]>}    countries object in the database
 */
async function getCountriesNameFromDB() {
    const db = await instance.getDBConnection();
    const query = "SELECT name FROM countries ORDER BY name";

    const row = await db.all(query, []);
    await db.close();
    return row;
}

module.exports.getCountriesNameFromDB = getCountriesNameFromDB;