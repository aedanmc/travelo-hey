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
 * The db_connection.js creates a database connection to the GCP MySQL instance
 *
 * Requires:
 *   - express:  Required to use the express framework
 *   - dotenv:   Required for reading in .env values
 */

"use strict";

const mysql = require("mysql");
require("dotenv").config();

const pe = process.env;
const db_connection = mysql.createConnection({
    host: pe.DB_HOST,
    user: pe.DB_USER,
    password: pe.DB_PASS,
    database: pe.DB_NAME
});

db_connection.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
});

const dbSocketPath = pe.db_socket_path || "cloudsql";
const pool = mysql.createPool({
        user: pe.DB_USER,
        password: pe.DB_PASS,
        database: pe.DB_NAME,
        socketPath: `${dbSocketPath}/${pe.cloud_sql_connection_name}`
});

module.exports = {pool};