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
 *   - mysql:    Required to connect to database
 *   - dotenv:   Required for reading in .env values
 */

(function() {
    "use strict";

    console.log("in db connection");

    const express = require('express');
    const mysql = require("mysql");
    require("dotenv").config();

    const app = express();
    const pe = process.env;
    // const db_connection = mysql.createConnection({
    //     host: pe.DB_HOST,
    //     user: pe.DB_USER,
    //     password: pe.DB_PASSWORD,
    //     database: pe.DB_NAME
    // });

    // db_connection.connect(function(error) {
    //     if (error) throw error;
    //     console.log("Connected!");
    // });

    const createPool = async () => {
        const config = {
            connectionLimit: 10,
            connectionTimout: 10000,
            acquireTimeout: 10000,
            queueLimit: 0,
        };
        // const dbSocketPath = pe.db_socket_path || "/cloudsql/";
        // ignore warning for now
    };

    const ensureSchema = async pool => {
        // Wait for tables to be created (if they don't already exist).
        await pool.query(`SELECT * FROM users;`);
        console.log("Pulled users");
    };

    const createPoolAndEnsureSchema = async () =>
        await createPool()
            .then(async pool => {
                await ensureSchema(pool);
                return pool;
            })
            .catch(err => {
                console.error(err);
                throw err;
            });

// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.

    let pool;
    app.use(async (req, res, next) => {
        if (pool) {
            return next();
        }
        try {
            pool = await createPoolAndEnsureSchema();
            next();
        } catch (err) {
            console.error(err);
            return next(err);
        }
    });

    module.exports = createPool();
})();