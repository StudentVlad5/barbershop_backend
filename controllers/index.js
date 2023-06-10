const auth = require('./auth');
const user = require('./user');
const services = require('./services');
const event = require('./event');
const owner = require('./owner');
const message = require('./message');

module.exports = {
  auth,
  user,
  event,
  owner,
  message,
  services,
};
