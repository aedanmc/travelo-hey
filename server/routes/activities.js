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
 * Manages /activities endpoint
 *
 * Requires:
 *   - fs:     Used to read static file
 */

const fs = require("fs").promises;

/**
 * Retrieves a list of all activities. Returns in JSON format.
 */
async function getActivities(req, res) {
    try {
        const activities = await fs.readFile("data/activities.json", "utf8");
        res.type("json").send(activities);
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
}

module.exports.getActivities = getActivities;