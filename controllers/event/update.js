const { Event } = require("../../models");

const update = async (req, res, next) => {
  var eventData = [];
  console.log("reqest", req.body);
  try {
    if (
      req.body.action === "insert" ||
      (req.body.action === "batch" && req.body.added.length > 0)
    ) {
      req.body.action === "insert"
        ? eventData.push(req.body.value)
        : (eventData.push(req.body.added));
      for (var a = 0; a < eventData.length; a++) {
        // eventData[a].StartTime = new Date(eventData[a].StartTime);
        // eventData[a].EndTime = new Date(eventData[a].EndTime);
        await Event.create(eventData[a]);
      }
    }
    if (
      req.body.action === "update" ||
      (req.body.action === "batch" && req.body.changed.length > 0)
    ) {
      req.body.action === "update"
        ? eventData.push(req.body.value)
        : (eventData = req.body.changed);
      for (var b = 0; b < eventData.length; b++) {
        delete eventData[b]._id;
        // eventData[b].StartTime = new Date(eventData[b].StartTime);
        // eventData[b].EndTime = new Date(eventData[b].EndTime);
        await Event.updateOne({ Id: eventData[b].Id }, { $set: eventData[b] });
      }
    }
    if (
      req.body.action === "remove" ||
      (req.body.action === "batch" && req.body.deleted.length > 0)
    ) {
      req.body.action === "remove"
        ? eventData.push({ Id: req.body.key })
        : (eventData = req.body.deleted);
      for (var c = 0; c < eventData.length; c++) {
        await Event.deleteOne({ Id: eventData[c].Id });
      }
    }
    res.send(req.body);
    console.log("eventData", eventData);
    return res.status(200).json(eventData);
  } catch (error) {
    return res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = update;
