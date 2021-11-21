module.exports = {
  Operation_CONNECTION_ERROR: {
    message: 'MongoDB has failed to connect',
    type: 'Connection Failure',
  },
  INIT_APPLICATION_ERROR: {
    message: 'The application has failed to initialize',
    type: 'Initialization Failure',
  },
  INSERT_RECORD_ERROR: {
    message: 'There was an error when trying to insert a record',
    type: 'Operation Failure',
  },
  GET_BY_ID_ERROR: {
    message: 'There was an error when trying to find a record by id',
    type: 'Operation Failure',
  },
  GET_BY_PROPERTY_ERROR: {
    message: 'There was an error when trying to find a record by property',
    type: 'Operation Failure',
  },
  UPSERT_RECORD_ERROR: {
    message: 'There was an error when trying to upsert a record',
    type: 'Operation Failure',
  },
  REMOVE_RECORD_ERROR: {
    message: 'There was an error when trying to remove a record',
    type: 'Operation Failure',
  },
  TEST_ERROR: {
    message: 'This a test',
    type: 'Operation Failure',
  },
};
