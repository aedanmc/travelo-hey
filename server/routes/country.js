/**
 * CSE 403 Spring 2022
 *
 * Copyright ©2022 All rights reserved.
 *      - Aedan McCall          aedanmc (at) uw.edu
 *      - Alex Zúñiga           mzuniga (at) uw.edu
 *      - Camila Christensen    camilyo (at) cs.washington.edu
 *      - Matt Broom            matty162 (at) uw.edu
 *      - Michael Harris        micha06 (at) uw.edu
 *
 * Manages /country endpoint
 *
 * Requires:
 *   - ../helperFns/getCountryFromDB:     Specific helper function for this endpoint
 */

const fn = require('../helperFns/getCountryFromDB');

/**
 * Returns the country safety values for the given address. Address should be the formatted
 * address provided from a previous Google Places API call. Returns in JSON format.
 */
async function getCountry(req, res) {
    try {
        const country = req.body.country;
        const form_addr = req.body.form_addr;
        let results;
        if (form_addr) {
            results = await fn.getCountryFromDB(form_addr);
            res.type("json").send({"country": results});
        } else if (country) {
            results = await fn.getCountryFromDB(country);
            res.type("json").send({"country": results});
        } else {
            res.type("text").status(400)
                .send("Missing formatted address or country");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
}

module.exports.getCountry = getCountry;