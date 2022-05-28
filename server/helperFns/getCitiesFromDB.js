const instance = require('../db.connection');

/**
 * Helper function to retrieve the city names from the database.
 *
 * @param state                 state for which to query
 * @returns {Promise<any[]>}    city object for the given state
 */
async function getCitiesFromDB(state) {
    const db = await instance.getDBConnection();
    const query = "SELECT name FROM cities WHERE state_name = ? ORDER BY name";

    const row = await db.all(query, [state]);
    await db.close();
    return row;
}

module.exports.getCitiesFromDB = getCitiesFromDB;