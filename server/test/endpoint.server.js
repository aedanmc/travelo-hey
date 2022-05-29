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
 * Tests that the endpoints are producing the proper output with status code 200.
 *
 * Requires:
 *    - chai                For testing framework
 *    - chai.should         For testing framework
 *    - chai-http           For testing framework
 *    - ../app              To test endpoints
 *    - ../db.connection    To connect with the database
 */

(async function() {
    "use strict";

    const chai = require('chai');
    const should = chai.should();   // ignore warning: without this 'res.should...' calls will not work
    const chaiHttp = require('chai-http');
    const app = require('../app').app;
    const db = require('../db.connection').getDBConnection();

    chai.use(chaiHttp);
    describe("Server Test", () => {
      it('test "/activities" endpoint', (done) => {
        chai.request(app)
          .get('/activities')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/business" endpoint', (done) => {
        chai.request(app)
          .post('/business')
          .send({
            'place_id': 'ChIJu9LYj-QUkFQRxb9K4D7e9bI',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/cities" endpoint', (done) => {
        chai.request(app)
          .post('/cities')
          .send({
            'state': 'Rio de Janeiro',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/countries" endpoint', (done) => {
        chai.request(app)
          .get('/countries')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/country" endpoint with formatted address', (done) => {
        chai.request(app)
          .post('/country')
          .send({
            'form_addr': '2865 Eastlake Ave E, Seattle, WA 98102, USA',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/country" endpoint with country name', (done) => {
        chai.request(app)
          .post('/country')
          .send({
            'country': 'Brazil',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/reviews" endpoint', (done) => {
        chai.request(app)
          .post('/reviews')
          .send({
            'place_id': 'ChIJu9LYj-QUkFQRxb9K4D7e9bI',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      })

      it('test "/reviews/new" endpoint', (done) => {
        chai.request(app)
          .post('/reviews/new')
          .send({
            'userID': 10,
            'place_id': 'ChIJu9LYj-QUkFQRxb9K4D7e9bI',
            'inclusiveLanguages': 1,
            'neutralRestroom': 1,
            'queerBusinessPromotion': 1,
            'accessibility': 0,
            'queerSignage': 1,
            'safety': 5,
            'recommendedBusiness': 0,
            'review': 'This is my first time trying this restaurant and I loved it! The restaurant had a very ' +
              'cool theme and great service. I felt safe and respected.'
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            cleanTest();
            done();
          });
      });

      it('test "/search" endpoint', (done) => {
        chai.request(app)
          .post('/search')
          .send({
            'city': 'Seattle',
            'activity': 'restaurants',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('test "/states" endpoint', (done) => {
        chai.request(app)
          .post('/states')
          .send({
            'country': 'Brazil',
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
});

  /**
   * Helper function to remove the last review added due to testing the /reviews/new endpoint.
   */
  async function cleanTest() {
    const query_delete = "DELETE FROM reviews WHERE reviewsID = (SELECT MAX(reviewsID) FROM reviews)";
    await db.run(query_delete);
    await db.close();
  }

})();
