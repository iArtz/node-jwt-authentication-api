require('rootpath')();
const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { ENV } = require('config');
const errorHandler = require('_helpers/error-handler');
const jwt = require('_helpers/jwt');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = ENV === 'production' ? 80 : 4000;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ${ENV} listening on port ${port}`);
});

module.exports = {
  server,
};
