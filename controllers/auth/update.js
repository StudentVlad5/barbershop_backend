const { ValidationError } = require("../../helpers");
const { Users } = require("../../models");
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require("../../helpers");

const update = async (req, res, next) => {
  const { id } = req.params;
    console.log("newData", newData);
    const newData = dataFilter(req.body, userFieldReceivedFromFront);
    if (!newData) {
      throw new ValidationError("Bad request, invalid data");
    }
    console.log("newData", newData);
    req.file?.path && (newData.avatar = req.file.path);
    const resUpdate = await Users.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    console.log("resUpdate", resUpdate);
    const newResponse = dataFilter(resUpdate, userMainField);
    // req.file?.path && (newResponse.avatar = req.file.path);
    console.log("newResponse", newResponse);
    res
    .status(201)
    .json({ code: "201", message: "profile update", data: newResponse });
};
module.exports = update;
