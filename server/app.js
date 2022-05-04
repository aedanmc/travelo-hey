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
 * Top level manager for routes and status codes.
 *
 * Requires:
 *   - express:  Required to use the express framework
 *   - multer:   Required for accepting multipart/form-data
 *   - dotenv:   Required for reading in .env values
 */

"use strict";

/** IMPORT MODULES **/
const express = require("express");
const multer = require("multer");
require("dotenv").config();

/** IMPORT ROUTES **/
const firstRouter = require("./routes/firstRoute");

const app = express();
const pe = process.env;

// for application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// for application/json
app.use(express.json());

// for multipart/form-data
app.use(multer().none());

/** USE ROUTES **/
app.use('/', firstRouter);

/** STATUS HANDLING **/
// catch undefined routes and respond with 400
app.use((req, res, next) => {
    if (res.statusCode === pe.STATUS_400) {
        res.status(pe.STATUS_400).send("Are you supposed to be here?");
    } else if (res.statusCode === pe.STATUS_404) {
        res.status(pe.STATUS_404).send("Sorry can't find that!");
    } else {
        next(res.error());
    }
});

// catch server errors and respond with 500
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors (err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
        res.status(pe.STATUS_500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
}

function errorHandler (err, req, res, next) {
    res.status(pe.STATUS_500);
    res.render('error', { error: err });
}

/** Allow app to be used in server.js **/
module.exports = app;