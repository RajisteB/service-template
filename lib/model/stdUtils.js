const errorFactory = require('../config/errors/errorFactory');
const errorConstants = require('../config/errors/errorConstants');

const createDatasourceUtils = (Model) => {
  const createNewModel = (data) => new Model(data);

  const insert = (data) => {
    const doc = createNewModel(data);
    return doc
      .save()
      .then((result) => result)
      .catch((err) => errorFactory.createError(errorConstants.INSERT_RECORD_ERROR, err));
  };

  const getById = (id) => Model.findById(id)
    .then((result) => result)
    .catch((err) => errorFactory.createError(errorConstants.GET_BY_ID_ERROR, err));

  const getByElement = (data) => Model.findOne(data)
    .then((result) => result)
    .catch((err) => errorFactory.createError(errorConstants.GET_BY_PROPERTY_ERROR, err));

  const getAllByElement = (data) => Model.find(data)
    .then((result) => result)
    .catch((err) => errorFactory.createError(errorConstants.GET_BY_PROPERTY_ERROR, err));

  const update = (arg, updateData) => Model.findOneAndUpdate(
    arg,
    updateData,
    {
      upsert: true,
      new: true,
    },
  )
    .then((result) => result)
    .catch((err) => errorFactory.createError(errorConstants.UPDATE_RECORD_ERROR, err));

  const remove = (data) => Model.deleteOne(data)
    .then((response) => response.deletedCount)
    .catch((err) => errorFactory.createError(errorConstants.REMOVE_RECORD_ERROR, err));

  return Object.freeze({
    update,
    insert,
    remove,
    getById,
    getByElement,
    getAllByElement,
  });
};

module.exports = createDatasourceUtils;
