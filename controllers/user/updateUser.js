const { ValidationError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const { Users } = require("../../models");
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilter(req.body, userFieldReceivedFromFront);
    req.file?.path && (newData.avatar = req.file.path);
    if(newData.password !=="" && newData.password !==undefined){
      const hashPassword = bcrypt.hashSync(
        newData.password,
        bcrypt.genSaltSync(10)
      );
      newData.password = hashPassword;
    }
    const resUpdate = await Users.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilter(resUpdate, userMainField);
    req.file?.path && (newResponse.avatar = req.file.path);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateUser;
