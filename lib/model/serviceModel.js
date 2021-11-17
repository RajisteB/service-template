const mongoose = require('mongoose');

const { Schema } = mongoose;

const SomeSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ServiceModel = mongoose.model('serviceModel', SomeSchema);
module.exports = ServiceModel;