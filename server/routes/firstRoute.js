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
 * Route that...
 *
 * Requires:
 *   - express:             Required to use the express framework
 *   - dotenv:              Required for reading in .env values
 *   - '../db_connection':  Required to pull the socket pool
 */

(function () {
    "use strict";

    const express = require('express');
    const app = express.Router();
    // const router = express.Router();
    // const db = require('../db_connection');

    // db.pool.query()

    console.log("first route");
    // simple GET end point to test for now
    app.get('/', (req, res) => {
        res.send('Hello Camila!');
    });

    module.exports = app;
})();