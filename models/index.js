const Pet = require('./petModel');
const News = require('./news');
const Breed = require('./breeds');
const Friends = require('./friends');
const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require('./users');
const Notices = require('./notices');
const Developers = require('./developers');
const Event = require('./event');

module.exports = {
  Breed,
  News,
  Friends,
  Pet,
  Users,
  Notices,
  userValidationSchema,
  userUpdateValidationSchema,
  Developers,
  Event,
};
