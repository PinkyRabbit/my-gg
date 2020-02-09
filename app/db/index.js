const monk = require('monk');

const { connectUrl: url, loggerLevel } = require('../configs/database');

monk(url).catch((err) => {
  console.log(err); // eslint-disable-line
  process.exit(1);
});

const options = {
  loggerLevel,
};

module.exports = {
  mongodbId: (_id) => monk.id(_id),
  Users: monk(url, options).get('user'),
};
