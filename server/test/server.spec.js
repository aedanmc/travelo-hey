/**
 *
 */

(function() {
    "use strict";

    const expect = require('chai').expect;
    const http = require('http');
    const url = "http://localhost:8080";

    http.get(url + '/', res => {
        describe("Server Tests:")
    })


    describe("Server Tests:", () => {
        it('checks / endpoint for success status', (done) => {
            http.get(url + "/", res => {
                expect(res.statusCode).to.equal(200);
            }).on('error', err => {
                console.log(err.message);
                console.log("alskdjfaldskjf");
            })
            done();
        });

        it('checks / endpoint for success status', (done) => {
            http.get(url + "/business", res => {
                expect(res.statusCode).to.equal(200);
            })
            done();
        });
    });

    function statusCheck(res) {
        console.log(res);
        if (!res.ok) throw new Error("status not 200"); }
})();
