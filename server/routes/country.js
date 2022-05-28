const fn = require('../helperFns/getCountryFromDB');

/**
 * Returns the country safety values for the given address. Address should be the formatted
 * address provided from a previous Google Places API call. Returns in JSON format.
 */
async function getCountry(req, res) {
    try {
        const form_addr = req.body.form_addr;
        if (form_addr) {
            const country = await fn.getCountryFromDB(form_addr);
            res.type("json").send({"country": country});
        } else {
            res.type("text").status(400)
                .send("Missing form_addr");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
};

module.exports.getCountry = getCountry;