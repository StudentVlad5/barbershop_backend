const { ValidationError } = require('../../helpers');
const { Users } = require('../../models');
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require('../../helpers');

const createUser = async (req, res, next) => {
  try {
    const newData = req.body;
    req.file?.path && (newData.avatar = req.file.path);
    const resCreate = await Users.create(newData, {
      new: true,
    });
    req.file?.path && (resCreate.avatar = req.file.path);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createUser;
