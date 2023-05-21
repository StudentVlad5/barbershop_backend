const { Schema, model, SchemaTypes } = require("mongoose");

const eventSchema = new Schema(
  {
    // owner: { type: SchemaTypes.ObjectId, ref: "users" },
    Location: {
      type: String,
    },
    Subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    StartTime: {
      type: String,
      required: [true, "StartTime is required"],
    },
    EndTime: {
      type: String,
      required: [true, "EndTime is required"],
    },
    IsAllDay: {
      type: Boolean,
      required: [true, "IsAllDay is required"],
    },
    Description: {
      type: String,
    },
    OwnerId: {
      type: Number,
      required: [true, "OwnerId is required"],
    },
    Id: {
      type: Number,
      required: [true, "OwnerId is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Event = model("event", eventSchema);

module.exports = Event;
