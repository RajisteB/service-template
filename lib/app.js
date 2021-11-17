const express = require('express');
const constants = require('./config/constants');
const initServer = require('./config/server');

const app = express();
const port = process.env.PORT || 8080; // Add your own port
initServer(app);

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(`![ERROR] SERVER CONNECTION: ${err}`);
  }
  // eslint-disable-next-line no-console
  console.log(`*****\n***** ${constants.serviceName.toUpperCase()} - SERVER CONNECTION: OK --- CONNECTED VIA PORT: ${port} \n*****`);
});