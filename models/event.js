const { Schema, model, SchemaTypes } = require("mongoose");

const eventSchema = new Schema(
  {
    // owner: { type: SchemaTypes.ObjectId, ref: "users" },
    Id: {
      type: Number,
      required: [true, "Id is required"],
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
    Status: {
      type: String,
      required: [true, "Status is required"],
    },
    Priority: {
      type: String,
      required: [true, "Priority is required"],
    },
    OwnerId: {
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
