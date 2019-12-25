const request = require('supertest');
// const finishTestcase = require('jasmine-supertest');

const app = require('../app/index.js');

describe('base url tests', () => {
  it('should return 404 page with 404 status for page that not exist', (done) => {
    request(app)
      .get('/incorrect-url')
      .expect(404)
      .expect('Content-Type', /text/)
      .end((err, body) => {
        if (err) {
          done(err);
        }

        expect(body.text).toContain('<img class="logo" src="/images/standard/404.jpg" alt="Ошибка">');
        done();
      });
  });
});
