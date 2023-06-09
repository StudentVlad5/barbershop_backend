const { Messages } = require("../../models");

const post = async (req, res, next) => {
  const { name, phone, message } = req.Payload;
  console.log(req.Payload);
  try {
    await Messages.create({ name, phone, message });
    return res.status(200).json({ message: "Success status" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = post;
