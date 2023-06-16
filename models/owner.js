const { Schema, model, SchemaTypes } = require("mongoose");
require("mongoose-type-url");

const ownerSchema = new Schema(
  {
    ownerText: {
      type: String,
      required: [true, "OwnerText is required"],
    },
    Id: {
      type: Number,
      required: [true, "Id is required"],
    },
    ownerColor: {
      type: String,
      required: [true, "OwnerColor is required"],
    },
    designation: {
      type: String,
      required: [true, "designation is required"],
    },
    workDays: {
      type: String,
    },
    // { type: Array, default: [] },
    //{ type: [String] },
    startHour: {
      type: String,
    },
    endHour: {
      type: String,
    },
    groupId: {
      type: String,
    },
    avatar: {
      type: String,
      required: [true, "URL can't be empty"],
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Owner = model("owner", ownerSchema);

module.exports = Owner;
