/* eslint-disable prefer-template */
const connectUrl = [
  process.env.DB_USER && process.env.DB_PASSWORD
    ? process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@'
    : '',
  process.env.DB_IP + ':27017',
  process.env.NODE_ENV === 'test' ? '/test' : '/' + process.env.DB_NAME,
].join('');
/* eslint-enable prefer-template */

const loggerLevel = process.env.NODE_ENV === 'development'
  ? 'error'
  : 'warn';

module.exports = { connectUrl, loggerLevel };
