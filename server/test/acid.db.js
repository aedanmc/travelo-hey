/**
 *
 * The db.test.js test the basic functionalities of the local sqlite database, including
 * checks for database connection, inserting, deleting and retrieving data.
 *
 * Requires:
 *      - db_connection.js:    Connection to the database
 *      - chai:                Required assertion library for testing
 /*


/**
 * Number of items in the countries table
 * @type {number}
 */
const countries = 140;

/**
 * New user to be inserted in users table
 * @type {string}
 */
const new_user = "Test";

/**
 * Establishes a database connection to the travelo-hey database and returns the database object.
 * @returns {Object} - The database object for the connection.
 */

const db = require('../db_connection').getDBConnection();

(async function () {
    "use strict";

    const expect = await require("chai").expect;

    describe("DB Test", () => {
        it('check database connection', (done) => {
            let connection = false;

            if (db) {
                connection = true
            };

            expect(true).to.equal(connection);
            done();
        });

        it('count values in countries table', (done) => {

            const qry = "SELECT COUNT(name) FROM countries";

            async function countries_test () {
                const row = await db.all(qry, []);

                // extract value of object inside the array returned by db.all
                var countries_count = Object.values(row[0])[0];
                expect(countries).to.equal(countries_count);
            }
            done();
            countries_test().then();
        });

        it('insert new user', (done) => {

            const qry_insert = `INSERT INTO
                                users(name, password, email, phonenumber)
                                VALUES ('Test', 1234, 'test@user-test.com', '205-744-0000')`;

            async function insert_test () {
                const row = await db.all(qry_insert, []);
            }
            done();
            insert_test().then();
        });

        it('retrieve new user', (done) => {
            async function retrieve_test () {
                const qry_retrieve = `SELECT * FROM users\n WHERE name == \"Test\"`;

                const row = await db.all(qry_retrieve, []);

                // extract value of object inside the array returned by db.all
                var retrieved_user = Object.values(row[0])[1];
                expect(new_user).to.equal(retrieved_user);
            }
            done();
            retrieve_test().then();
        });

        it('delete user', (done) => {
            async function retrieve_test () {
                const qry_delete = `DELETE FROM users WHERE name == \"Test\"`;

                let row = await db.all(qry_delete, []);
            }
            done();
            retrieve_test().then();
        });

        it('retrieve deleted user', (done) => {
            async function retrieve_test () {
                const qry_retrieve = `SELECT * FROM users\n WHERE name == \"Test\"`;

                const row = await db.all(qry_retrieve, []);

                expect("[]").to.equal(row);
            }
            done();
            retrieve_test().then();
        });

        it('transaction test', (done) => {
            done();
        });
    });
    await db.close();
})();