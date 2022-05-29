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
 * Manages /states endpoint
 *
 * Requires:
 *   - ../helperFns/getStatesFromDB:       Specific helper function for this endpoint
 */

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