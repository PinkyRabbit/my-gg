
require('dotenv').config();

const bcrypt = require('bcryptjs');

const { Users } = require('../app/db');

(async () => {
  const existedSA = await Users.findOne({ email: process.env.ADMIN_EMAIL });
  if (existedSA) {
    console.log('Super Admin already created');
    process.exit(1);
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);
  const newSuperAdmin = {
    email: process.env.ADMIN_EMAIL,
    password: hash,
  };
  await Users.insert(newSuperAdmin);
  process.exit(0);
})();
