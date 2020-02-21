const expressJwt = require('express-jwt');
const { secret } = require('config');

function jwt() {
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      '/users/authenticate',
    ],
  });
}

module.exports = jwt;
