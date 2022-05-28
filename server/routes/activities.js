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