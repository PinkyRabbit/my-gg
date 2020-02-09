const request = require('supertest');

const app = require('../app/index.js');

describe('Unit tests', () => {
  describe('#validation:', () => {
    it('Should pick only correct page numbers', async () => {
      await request(app).get('/').expect(200);
      await request(app).get('/').query({ page: '0' }).expect(200);
      await request(app).get('/').query({ page: 'AAA' }).expect(400);
      await request(app).get('/').query({ page: 'AAA0' }).expect(400);
      await request(app).get('/').query({ page: '-150' }).expect(400);
      await request(app).get('/').query({ page: '0.000006' }).expect(400);
    });
  });
});
