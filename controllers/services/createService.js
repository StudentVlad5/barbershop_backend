const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");

const createService = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const resUpdate = await Service.create(req.body, {
      new: true,
    });
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createService;
