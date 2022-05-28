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