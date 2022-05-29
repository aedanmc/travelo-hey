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
 * Helper function to retrieve country information from the database.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to retrieve country information from the database.
 *
 * @param form_addr             the address of a business
 * @returns {Promise<any[]>}    the promise of results of countries
 */
async function getCountryFromDB(form_addr) {
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

module.exports.getCountryFromDB = getCountryFromDB;