/**
 *
 */

(function() {
    "use strict";

    const expect = require('chai').expect;
    let foo = 'bar',
        beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    describe("Server Test", () => {
        it('check type of foo is string', (done) => {
            expect(foo).to.be.a('string');
            done();
        });

        it('check foo is "bar"', (done) => {
            expect(foo).to.equal('bar');
            done();
        });

        it('check length of foo is 3', (done) => {
            expect(foo).to.have.lengthOf(3);
            done();
        });

        it('check beverages contains "tea" with length of 3', (done) => {
            expect(beverages).to.have.property('tea').with.lengthOf(3);
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