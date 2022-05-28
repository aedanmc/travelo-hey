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