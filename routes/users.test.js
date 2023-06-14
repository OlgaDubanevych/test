var express = require('express');
var supertest = require('supertest');

var app = require('./users.js'); 

var request = supertest(app);

describe('User API', function() {
  // Test the GET / route
  describe('GET /', function() {
    it('should return a list of users', function(done) {
      request
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);

          

          done();
        });
    });
  });

  // Test the GET /add route
  describe('GET /add', function() {
    it('should render the add user form', function(done) {
      request
        .get('/add')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);

        

          done();
        });
    });
  });

  // Test the POST /add route
  describe('POST /add', function() {
    it('should add a new user', function(done) {
      request
        .post('/add')
        .send({ name: 'John', age: 25, email: 'john@example.com' })
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);

          

          done();
        });
    });
  });

  // Test the GET /edit/:id route
  describe('GET /edit/:user_id', function() {
    it('should render the edit user form', function(done) {
      var userId = 1; 

      request
        .get('/edit/' + userId)
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);

       

          done();
        });
    });
  });

  // Test the PUT /edit/:id route
  describe('PUT /edit/:user_id', function() {
    it('should update a user with the specified user_id', function(done) {
      var userId = 1; 
      request
        .put('/edit/' + userId)
        .send({ name: 'John Doe', age: 30, email: 'johndoe@example.com' })
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);


          done();
        });
    });
  });

  // Test the DELETE /delete/:id route
  describe('DELETE /delete/:user_id', function() {
    it('should delete a user with the specified user_id', function(done) {
      var userId = 1; 

      request
        .delete('/delete/' + userId)
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err, res) {
          if (err) return done(err);

         

          done();
        });
    });
  });
});
