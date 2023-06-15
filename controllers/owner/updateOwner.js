const { ValidationError } = require('../../helpers');
const { Owner } = require('../../models');
const { dataFilter } = require('../../helpers');

const updateOwner = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilter(req.body);
    const resUpdate = await Owner.findByIdAndUpdate(
      { _id: id },
      // { $addToSet: newData.workDays },
      newData,
      {
        new: true,
      }
    );
    const newResponse = dataFilter(resUpdate);
    return res.status(201).json(newResponse);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateOwner;
