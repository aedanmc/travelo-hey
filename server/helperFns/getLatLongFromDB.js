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