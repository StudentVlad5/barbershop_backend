const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");
// const { dataFilter } = require("../../helpers");

const createService = async (req, res, next) => {
  // const { id } = req.params;
  try {
    // const newData = dataFilter(req.body);
    const resUpdate = await Service.create(req.body, {
      new: true,
    });
    // const newResponse = dataFilter(resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateService;
