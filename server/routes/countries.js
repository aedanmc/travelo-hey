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
 * Manages /countries endpoint
 *
 * Requires:
 *   - ../helperFns/getCountriesNameFromDB:     Specific helper function for this endpoint
 */

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
}

module.exports.getCountries = getCountries;