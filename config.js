const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  ENV: process.env.NODE_ENV,
  secret: process.env.SECRET,
};
