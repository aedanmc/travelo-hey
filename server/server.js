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

 const app = require('./app');

 const port = parseInt(process.env.PORT || PORT_8000, 10);
 app.set('port', port);

 app.listen(port, () => {
  console.log("Listening on port " + port + "..."); // uncomment for debugging
 });

 app.use(app.static("../front-end/public/"));
})();