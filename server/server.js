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
 * Server side API for Travelo-Hey! Main entry to setup port for listening and begin main app.
 *
 * Requires:
 *   - './app':  Main application handling routes
 *   - express:  Required to use the express framework
 */

(function() {
 "use strict";
 const PORT_8000 = 8000;

 const express = require("express");
 const mysql = require("mysql");
 // require("dotenv").config();

 const app = express();
 const pe = process.env;

 // const db = require('./db_connection');
 require('./app');

 var config = {
    user: pe.DB_USER,
    password: pe.DB_PASSWORD,
    database: pe.DB_NAME
 }

 if (pe.CLOUD_SQL_CONNECTION_NAME) {
    config.socketPath = `/cloudsql/${pe.CLOUD_SQL_CONNECTION_NAME}`
 }

 let connection = mysql.createConnection(config);
 connection.connect();

 // const createUnixSocketPool = async config => {
 //  const dbSocketPath = pe.DB_SOCKET_PATH || "/cloudsql";
 //  return mysql.createPool({
 //   user: pe.DB_USER,
 //   password: pe.DB_PASSWORD,
 //   database: pe.DB_NAME,
 //   socketPath: `${dbSocketPath}/${pe.CLOUD_SQL_CONNECTION_NAME}`,
 //   ...config,
 //  });
 // };

 app.get('/', async (req, res) => {
  const config = {};
  // const pool = await createUnixSocketPool(config);
  connection.query('SELECT * FROM countries;', function (error, results, fields) {
   if (error) {
    console.log(error);
    res.status(500)
        .send(error)
        .end();
   } else {
    console.log(res);
    res.status(200)
        .send(results)
        .end();
   }
  });
 });

 const port = parseInt(process.env.PORT || PORT_8000, 10);
 app.listen(port, () => {
  console.log("Listening on port " + port + "..."); // uncomment for debugging
 });

 app.use(express.static("../front-end/public/"));
})();