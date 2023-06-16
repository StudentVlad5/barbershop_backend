const { ValidationError } = require("../../helpers");
const { Owner } = require("../../models");

const createOwner = async (req, res, next) => {
  try {
    const resUpdate = await Owner.create(req.body, {
      new: true,
    });
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createOwner;
