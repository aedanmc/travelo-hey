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
 * Manages /search endpoint
 *
 * Requires:
 *   - ../helperFns/getLatLongFromDB:       Specific helper function for this endpoint
 *   - https:                               Used to query Google Places API
 */

const PLACES_TEXTSEARCH_BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/";
const fn = require('../helperFns/getLatLongFromDB');
const https = require('https');

/**
 * Endpoint that calls Google Places API to retrieve local businesses relative to the provided
 * activity for the provided city. Returns in JSON format.
 */
async function search(req, res) {
    try {
        const activity = req.body.activity;
        const city = req.body.city;

        if (activity && city) {
            // obtain lat long
            const latLong = await fn.getLatLongFromDB(city);
            const latLongString = "" + latLong[0].latitude + "," + latLong[0].longitude;

            // query Google Places API
            const query = "json?query=" + activity + "&location=" + latLongString + "&key=" + process.env.PLACES_KEY;
            https.request(PLACES_TEXTSEARCH_BASE_URL + query, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    res.type("json").send(data);
                })
            }).on('error', (error) => {
                res.type("text").status(500)
                    .send(error);
            }).end();
        } else {
            res.type("text").status(400)
                .send("Missing activity and/or city");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
}

module.exports.search = search;