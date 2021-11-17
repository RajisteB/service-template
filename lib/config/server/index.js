const dbConfiguration = require('./datasource');
const expressConfiguration = require('./express');

module.exports = async (application) => {
  await dbConfiguration();
  const app = await expressConfiguration(application);
  return app;
};