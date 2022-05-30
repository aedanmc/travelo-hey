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
 * Helper function to retrieve the latitude and longitude values for a given city.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to retrieve the latitude and longitude values for a given city.
 *
 * @param city                  city for which to query
 * @returns {Promise<any[]>}    latitude and longitude object for the given city
 */
async function getLatLongFromDB(city) {
    const db = await instance.getDBConnection();
    const query = "SELECT latitude, longitude FROM cities WHERE name = ?";

    const row = await db.all(query, [city]);
    await db.close();
    return row;
}

module.exports.getLatLongFromDB = getLatLongFromDB;