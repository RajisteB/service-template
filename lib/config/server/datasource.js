const mongoose = require('mongoose');
const dotenv = require('dotenv');
const errorConstants = require('../errors/errorConstants');
const constants = require('../constants');

dotenv.config();

module.exports = () => {
  // Set db url as env var
  const dbUrl = process.env.DB_CONNECTION_URL;

  mongoose
    .connect(dbUrl, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((link) => {
      console.log(`***** ${constants.serviceName.toUpperCase()} - DATABASE CONNECTION: OK \n***** HOSTED BY: ${link.connection.host} \n*****\n`);
    })
    .catch((err) => {
      console.error(errorConstants.DATABASE_CONNECTION_ERROR, err);
    });
};
