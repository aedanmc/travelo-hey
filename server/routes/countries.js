const fn = require('../helperFns/getCountriesNameFromDB');
/**
 * Retrieves a list of all countries in the database. Returns in JSON format.
 */
async function getCountries(req, res) {
    try {
        const countries = await fn.getCountriesNameFromDB();
        res.type("json").send({"countries": countries});
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
};

module.exports.getCountries = getCountries;