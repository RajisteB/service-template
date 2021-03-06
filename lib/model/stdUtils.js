const { createError } = require('../config/errors/errorFactory');
const errorConstants = require('../config/errors/errorConstants');

const createDatasourceUtils = (Model) => {
  const createNewModel = (data) => new Model(data);

  const insert = (data) => {
    const doc = createNewModel(data);
    return doc
      .save()
      .then((result) => result)
      .catch((err) => createError(errorConstants.INSERT_RECORD_ERROR, err));
  };

  const getById = (id) => Model.findById(id)
    .then((result) => result)
    .catch((err) => createError(errorConstants.GET_BY_ID_ERROR, err));

  const getByElement = (data) => Model.findOne(data)
    .then((result) => result)
    .catch((err) => createError(errorConstants.GET_BY_PROPERTY_ERROR, err));

  const getAllByElement = (data) => Model.find(data)
    .then((result) => result)
    .catch((err) => createError(errorConstants.GET_BY_PROPERTY_ERROR, err));

  const upsert = (arg, upsertData) => Model.findOneAndUpdate(
    arg,
    upsertData,
    {
      upsert: true,
      new: true,
    },
  )
    .then((result) => result)
    .catch((err) => createError(errorConstants.UPSERT_RECORD_ERROR, err));

  const remove = (data) => Model.deleteOne(data)
    .then((response) => response.deletedCount)
    .catch((err) => createError(errorConstants.REMOVE_RECORD_ERROR, err));

  return Object.freeze({
    upsert,
    insert,
    remove,
    getById,
    getByElement,
    getAllByElement,
  });
};

module.exports = createDatasourceUtils;
