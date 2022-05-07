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

// (function() {
    "use strict";

    const mysql = require("mysql");
    require('dotenv').config();
    const pe = process.env;

    const connection = mysql.createPool({
        user: pe.DB_USER,
        password: pe.DB_PASS,
        database: pe.DB_NAME,
        host: pe.DB_HOST,
        port: pe.DB_PORT
    });

    // connection.(error => {
    //     if (error) {
    //         throw error;
    //     } else {
    //         console.log("Sucessfully connect to the database");
    //     }
    // });

    module.exports = connection;

//     const createTcpPool = async config => {
//         const dbConfig = {
//             user: pe.DB_USER,
//             password: pe.DB_PASS,
//             database: pe.DB_NAME,
//             host: pe.DB_HOST,
//             port: pe.DB_PORT
//         };
//         return mysql.createPool(dbConfig);
//     };
//
//     module.exports = createTcpPool;
// })();
