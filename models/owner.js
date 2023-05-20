const { Schema, model, SchemaTypes } = require("mongoose");

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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Owner = model("owner", ownerSchema);

module.exports = Owner;
