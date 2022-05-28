const fn = require('../helperFns/getCitiesFromDB');

/**
 * Retrieves a list of all cities in the database for the given state. Returns in JSON format.
 */
async function getCities(req, res) {
    try {
        const state = req.body.state;

        if (state) {
            const cities = await fn.getCitiesFromDB(state);
            res.type("json").send({"cities": cities});
        } else {
            res.type("text").status(400)
                .send("Missing state");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
};


module.exports.getCities = getCities;