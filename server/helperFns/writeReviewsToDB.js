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
 * Helper function to add a new review to the database.
 *
 * Requires:
 *   - ../db.connection:     Used to establish connection to local database
 */

const instance = require('../db.connection');

/**
 * Helper function to add a new review to the database.
 *
 * @param review_params         the array of parameters to be stored in the database
 * @returns {Promise<any[]>}    the promise of results after the review has been added
 */
async function writeReviewsToDB(review_params) {
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

module.exports.writeReviewsToDB = writeReviewsToDB;