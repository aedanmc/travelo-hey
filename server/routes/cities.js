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
 * Manages /cities endpoint
 *
 * Requires:
 *   - ../helperFns/getCitiesFromDB:     Specific helper function for this endpoint
 */

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
}


module.exports.getCities = getCities;