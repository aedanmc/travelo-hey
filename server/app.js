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
 */

"use strict";

/** GLOBAL STATUS CODES **/
const STATUS_400 = 400;
const STATUS_404 = 404;
const STATUS_500 = 500;

/** IMPORT ROUTES **/


/** IMPORT MODULES **/
const express = require("express");
const multer = require("multer");
const mysql = require("mysql");

const app = express();

const pe = process.env;

// for application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// for application/json
app.use(express.json());

// for multipart/form-data
app.use(multer().none());

/** ENDPOINTS **/


/** STATUS HANDLING **/
// simple GET end point to test for now
app.get('/', (req, res) => {
    res.send('Hello Camila!');
});

// catch undefined routes and respond with 400
app.use((req, res, next) => {
    if (res.statusCode === STATUS_400) {
        res.status(STATUS_400).send("Are you supposed to be here?");
    } else if (res.statusCode === STATUS_404) {
        res.status(STATUS_404).send("Sorry can't find that!");
    } else {
        next(res.error());
    }
});

// catch server errors and respond with 500
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
}


function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}


/** Creating db connection **/

const createSocketPool = async (config) => {
    const dbSocketPath = process.env.db_socket_path || "cloudsql"

    // Establish the db connection
    return await mysql.createPool({
        user: pe.db_user,
        password: pe.db_pw,
        database: pe.db_name,
        socketPath: `${dbSocketPath}/${pe.cloud_sql_connection_name}`
    });

}

/** Allow app to be used in server.js **/
module.exports = app;