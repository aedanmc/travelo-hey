/**
 *
 * The db.schema.test.js test the schema of the local sqlite database.
 *
 * Requires:
 *      - db_connection.js:    Connection to the database
 *      - chai:                Required assertion library for testing
 /*

/**
 * Establishes a database connection to the travelo-hey database and returns the database object.
 * @returns {Object} - The database object for the connection.
 */
const db = require('../db.connection');

const tables = [ {name: 'users'}, {name: 'countries'}, {name: 'reviews' } ];

(async function() {
    "use strict";

    const expect = require('chai').expect;

    describe("DB Schema Test", () => {
        it('check tables in database', (done) => {

            const qry = `SELECT name FROM sqlite_schema
                         WHERE type IN ('table','view')
                           AND name NOT LIKE 'sqlite_%'
                         `;
            async function tables_test () {
                const response = await db.getDBConnection();
                const row  = await response.all(qry, []);
                expect(tables).to.equal(row);
                await response.close();
            }
            done();
            tables_test().then();
        });
    });
})();
