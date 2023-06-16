const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");

const createService = async (req, res, next) => {
  try {
    const resUpdate = await Service.create(req.body, {
      new: true,
    });
    console.log(resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createService;
