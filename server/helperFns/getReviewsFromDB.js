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