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
        const { text } = body;

        expect(text).toContain('<img class="logo" src="/images/standard/404.jpg" alt="Страница не существует!">');
        expect(text).toContain('<title>Упс... — hack-it-up.ru</title>');
        expect(text).not.toContain('<pre>');
        done();
      });
  });

  it('should return correct title and h1 on home page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .end((err, body) => {
        if (err) {
          done(err);
        }
        const { text } = body;

        expect(text).toContain('<img class="logo" src="/images/standard/main.jpg" alt="Hello, world!">');
        expect(text).toContain('<title>Главная — hack-it-up.ru</title>');
        expect(text).toContain('<h1>Hello, world!</h1>');
        done();
      });
  });


  it('should return correct image csrf and captcha on login page', (done) => {
    request(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', /text/)
      .end((err, body) => {
        if (err) {
          done(err);
        }
        const { text } = body;

        expect(text).toContain('<img class="logo" src="/images/standard/login.jpg" alt="Дорога в эхо">');
        expect(text).toContain('<div class="g-recaptcha" data-sitekey=');
        expect(/value="[a-zA-Z0-9-]+"\s+name="_csrf"/m.test(text)).toBe(true);
        done();
      });
  });
});
