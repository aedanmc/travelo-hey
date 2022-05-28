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
};

module.exports.getReviews = getReviews;