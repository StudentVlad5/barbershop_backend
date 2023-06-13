const { Schema, model } = require('mongoose');

const servicesSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

const Services = model('services', servicesSchema);

module.exports = Services;
