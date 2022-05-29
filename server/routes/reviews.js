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
 * Manages /reviews endpoint
 *
 * Requires:
 *   - ../helperFns/getReviewsFromDB');:     Specific helper function for this endpoint
 */

const fn = require('../helperFns/getReviewsFromDB');

/**
 * Endpoint retrieving Travelo-Hey specific reviews for the given place_id.
 * Returns in JSON format.
 */
async function getReviews(req, res) {
    try {
        const place_id = req.body.place_id;
        if (place_id) {
            const reviews = await fn.getReviewsFromDB(place_id);
            res.type("json").send({"th_reviews": reviews});
        } else {
            res.type("text").status(400)
                .send("Missing place_id");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
}

module.exports.getReviews = getReviews;