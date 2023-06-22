const { Event } = require("../../models");

const getUserEvents = async (req, res, next) => {
  const id = req.params.id;
  try {
    console.log(id);
    const user = await Event.findById({ CreateId: id });
    console.log(user);
    // const newResponse = dataFilter(user, userMainField);
    res.status(200).json(user);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getUserEvents;
