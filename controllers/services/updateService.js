const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");
const { dataFilter } = require("../../helpers");

const updateService = async (req, res, next) => {
  const { id } = req.params;
  try {
    console.log(req.body);
    const newData = dataFilter(req.body);
    const resUpdate = await Service.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilter(resUpdate);
    return res.status(201).json(newResponse);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateService;
