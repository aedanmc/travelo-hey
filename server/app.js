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
 * Server side API for Travelo-Hey!
 *
 * Requires:
 *   - express:     Required to use the express framework
 *   - cors:        Required for axios front-end calls
 *   - fs:          Required to access local data file
 *   - multer:      Required for for multipart/form-data
 *   - dotenv:      Required to read .env environment variables
 */

(function() {
    "use strict";

    /***************/
    /** CONSTANTS **/
    /***************/
    const PORT_8000 = "8000";
    const PORT_8080 = "8080";

    /*************/
    /** IMPORTS **/
    /*************/
    const express = require("express");
    const app = express();
    const router = require("express").Router();
    const cors = require("cors");
    const multer = require("multer");
    require('dotenv').config();

    app.use(express.urlencoded({extended: true}));    // for application/x-www-form-urlencoded
    app.use(express.json());                                  // for application/json
    app.use(multer().none());                                 // for multipart/form-data
    app.use(cors());                                          // for network authorization

    /***************/
    /** ENDPOINTS **/
    /***************/
    const activities = require('./routes/activities');
    const businesses = require('./routes/business');
    const cities = require('./routes/cities');
    const countries = require('./routes/countries');
    const country = require('./routes/country');
    const reviews = require('./routes/reviews');
    const reviewsNew = require('./routes/reviews.new')
    const search = require('./routes/search');
    const states = require('./routes/states');

    router.get('/activities', activities.getActivities);
    router.post('/business', businesses.getBusiness);
    router.post('/cities', cities.getCities);
    router.get('/countries', countries.getCountries);
    router.post('/country', country.getCountry);
    router.post('/reviews', reviews.getReviews);
    router.post('/reviews/new', reviewsNew.writeReviews);
    router.post('/search', search.search);
    router.post('/states', states.getStates);

    app.use(router);

    /******************/
    /** SERVER SETUP **/
    /******************/

    const port = parseInt(PORT_8080 || PORT_8000, 10);
    let server = app.listen(port, () => {
        console.log("Listening on port " + port + "..."); // uncomment for debugging
    });

    app.use(express.static('../front-end/build'));

    module.exports.app = server;
})();