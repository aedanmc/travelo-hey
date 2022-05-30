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
 * Helper function to retrieve business reviews from the database.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to retrieve business reviews from the database.
 *
 * @param place_id              a unique identifier for a business
 * @returns {Promise<any[]>}    the promise of results of reviews
 */
async function getReviewsFromDB(place_id) {
    const db = await instance.getDBConnection();
    const query = "SELECT * FROM reviews " +
        "WHERE placeId = ?;";
    const rows = db.all(query, [place_id]);
    await db.close();
    return rows;
}

module.exports.getReviewsFromDB = getReviewsFromDB;