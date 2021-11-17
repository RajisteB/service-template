const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const dotenv = require('dotenv');
const express = require('express');
const constants = require('../constants');

dotenv.config();

// set service base url
const baseUrl = `/api/v1`;

const initExpressModules = async (app) => {
  const limit = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests',
  });

  app.use(helmet());
  app.use(xss());
  app.use(mongoSanitize());
  app.use(morgan('tiny'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static('build'));
  app.use('*', limit);
  app.use(`${baseUrl}`, (req, res, next) => res.send({ message: `${constants.serviceName} route OK`}));
  return app;
};

module.exports = initExpressModules;
