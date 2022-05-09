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
 const app = express();
 require('dotenv').config();

 app.use(require('./app'));

 const port = parseInt(process.env.PORT || PORT_8000, 10);
 app.listen(port, () => {
  console.log("Listening on port " + port + "..."); // uncomment for debugging
 });

 app.use(express.static("../front-end/public/"));
})();









// // let pool;
// app.use(async (req, res, next) => {
//  if (pool) {
//   return next();
//  }
//  try {
//   // const config = {};
//   // pool = await createTCPPool(config);
//   next();
//  } catch (err) {
//   console.error(err);
//   return next(err);
//  }
// });