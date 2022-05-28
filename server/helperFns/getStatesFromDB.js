const instance = require('../db.connection');

/**
 * Helper function to retrieve the state names from the database.
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