const { Schema, model, SchemaTypes } = require('mongoose');

const ownerSchema = new Schema(
  {
    ownerText: {
      type: String,
      required: [true, 'OwnerText is required'],
    },
    Id: {
      type: Number,
      required: [true, 'Id is required'],
    },
    ownerColor: {
      type: String,
      required: [true, 'OwnerColor is required'],
    },
    designation: {
      type: String,
      required: [true, 'designation is required'],
    },
    workDays: {
      type: Array,
    },
    startHour: {
      type: String,
    },
    endHour: {
      type: String,
    },
    groupId: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Owner = model('owner', ownerSchema);

module.exports = Owner;
