/**
 *
 */

(function() {
    "use strict";

    // const pool = require("../db_connection").pool;
    //
    // const selectUsers = "SELECT * FROM users";
    // pool.query(selectUsers, function (error, result, fields) {
    //     if (error) throw error;
    //     console.log(fields);
    // });

    const expect = require("chai").expect;

    describe("DB Acid Test", () => {
        it('check that true is true', (done) => {
            expect(true).to.equal(true);
            done();
        });
    });
})();

/**
 db.acid.spec.js
    - ACID Testing
        - Atomicity - transaction fails or passes (implicit in CRUD)
        - Consistency - transaction always result in a valid state
        - Isolation - if multiple translations are executed at once, result state of db should be the same
        - Durability - when transaction is done and committed - power loss and crash shouldn't change it
 db.crud.spec.js
    - CRUD Testing
        - Create
        - Retrieve
        - Update
        - Delete
 server.spec.js (!! HOLD - how does this work since we're using GCP Components !!)
    - check port is available
    - coverage testing (c8)
    - traffic - load balancing (unsure - via App Engine)
 */