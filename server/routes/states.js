const fn = require('../helperFns/getStatesFromDB');

/**
 * Retrieves a list of all states in the database for the given country. Returns in JSON format.
 */
async function getStates(req, res) {
    try {
        const country = req.body.country;

        if (country) {
            const state = await fn.getStatesFromDB(country);
            res.type("json").send({"states": state});
        } else {
            res.type("text").status(400)
                .send("Missing country");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
};

module.exports.getStates = getStates;