const PLACES_DETAILS_BASE_URL = "https://maps.googleapis.com/maps/api/place/details/";
const https = require("https");

/**
 * Endpoint that calls the Google Places API, retrieving more specific details for the given
 * place_id of a business. Returns in JSON format.
 */
async function getBusiness(req, res) {
    try {
        const place_id = req.body.place_id;
        if (place_id) {
            const query = "json?place_id=" + place_id + "&key=" + process.env.PLACES_KEY;
            https.request(PLACES_DETAILS_BASE_URL + query, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    res.type("json").send(data);
                })
            }).on('error', (error) => {
                res.type("text").status(500).send(error);
            }).end();
        } else {
            res.type("text").status(400)
                .send("Missing place_id");
        }
    } catch (error) {
        res.type("text").status(500)
            .send(error);
    }
};

module.exports.getBusiness = getBusiness;