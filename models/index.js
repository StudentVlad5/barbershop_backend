const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require("./users");
const Event = require("./event");
const Owner = require("./owner");

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  Event,
  Owner,
};
