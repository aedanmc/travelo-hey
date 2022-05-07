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


/**

 // createTcpPool initializes a TCP connection pool for a Cloud SQL
 // instance of MySQL.
 const createTcpPool = async config => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  const dbConfig = {
    host: process.env.INSTANCE_HOST, // e.g. '127.0.0.1'
    port: process.env.DB_PORT, // e.g. '3306'
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // ... Specify additional properties here.
    ...config,
  };
  // [END cloud_sql_mysql_mysql_connect_tcp]

  // [START cloud_sql_mysql_mysql_connect_tcp]
  // Establish a connection to the database.
  return mysql.createPool(dbConfig);
};
 // [END cloud_sql_mysql_mysql_connect_tcp_sslcerts]
 // [END cloud_sql_mysql_mysql_connect_tcp]
 module.exports = createTcpPool;

 */