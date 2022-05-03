/**
 * The db_connection.js creates a database connection to the GCP MySQL instance
 */

"use strict";

const mysql = require("mysql");
require("dotenv").config();

const pe = process.env;

const db_connection = mysql.createConnection({
    host: pe.db_host,
    user: pe.db_user,
    password: pe.db_pw,
    database: pe.db_name
});

db_connection.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
});

module.exports = db_connection;