const request = require('supertest');
// const finishTestcase = require('jasmine-supertest');

const app = require('../app/index.js');

describe('jasmine-supertest test suite', () => {
  it('calls done without any params and finishes the test case is fine', () => {
    request(app).get('/incorrect-url').expect(404);
    // request(app).get('/incorrect-url').expect(404).end(finishTestcase(doneMock));
  });
});
