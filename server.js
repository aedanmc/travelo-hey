/**
 * CSE 403 Spring 2022
 *
 * Copyright ©2022 All rights reserved.
 *      - Aedan McCall          aedanmc (at) uw.edu
 *      - Alex Zúñiga           mzuniga (at) uw.edu
 *      - Camila Christensen    camilyo (at) uw.edu
 *      - Matt Broom            matty162 (at) uw.edu
 *      - Michael Harris        micha06 (at) uw.edu
 *
 * Server side API for Travelo-Hey! Interfaces with frontend and database and API calls.
 *
 * Requires:
 *   - express:  Required to use the express framework
 *   - fs:       Required for read/write to data files - probably will not be needed for this project
 *   - multer:   Required for accepting multipart/form-data
 */

"use strict";

/*
 ****
 * MODULE GLOBAL CONSTANTS *
 ****
 */
const STATUS_400 = 400;
const STATUS_500 = 500;
const PORT_8000 = 8000;

/*
 ********************
 * REQUIRED MODULES *
 ********************
 */
const express = require("express");
const multer = require("multer");
const fs = require("fs").promises;
const app = express();

// for application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// for application/json
app.use(express.json());

// for multipart/form-data
app.use(multer().none());

/*
 *************
 * ENDPOINTS *
 *************
 */

// simple GET end point to test for now
app.get('/', function (req, res) {
 res.send('Hello Camila!');
});

/*
 ********************
 * HELPER FUNCTIONS *
 ********************
 */



/*
 ******************
 * PORT LISTENING *
 ******************
 */
const PORT = process.env.PORT || PORT_8000;
 app.listen(PORT, () => {
 console.log("Listening on port " + PORT + "..."); // uncomment for debugging
});

// need to determine how we're structuring files. Typically app.js would be one level above our
// public files (public facing documents)
app.use(express.static("public"));
