const { ValidationError } = require('../../helpers');
const { Services } = require('../../models');

const getServices = async (req, res, next) => {
  try {
    const services = await Services.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};
module.exports = getServices;
