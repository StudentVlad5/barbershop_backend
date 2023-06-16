const { ValidationError } = require("../../helpers");
const { Owner } = require("../../models");

const createOwner = async (req, res, next) => {
  try {
    const fullData = { ...req.body };
    const resUpdate = await Owner.create(fullData);
    console.log("resUpdate", resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createOwner;
