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
 * Manages /reviews/new endpoint
 *
 * Requires:
 *   - ../helperFns/writeReviewsToDB:     Specific helper function for this endpoint
 */

const fn = require('../helperFns/writeReviewsToDB');

/**
 * Saves a new review in the database for the given business. Returns the review in JSON format.
 */
async function writeReviews(req, res) {
    try {
        const review_params = [
            req.body.userID, req.body.place_id, new Date().toUTCString(), req.body.inclusiveLanguages,
            req.body.neutralRestroom, req.body.queerBusinessPromotion, req.body.accessibility,
            req.body.queerSignage, req.body.safety, req.body.recommendedBusiness, req.body.review
        ];

        if (review_params[0] && review_params[1]) {
            const review = await fn.writeReviewsToDB(review_params);
            res.type("json").send(review);
        } else {
            res.type("text").status(400)
                .send("Missing userID or place_id");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
}

module.exports.writeReviews = writeReviews;