const mongoose = require("mongoose");

const privateTask = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
      // default: midnight of the current day
      default: new Date(new Date().setHours(23, 59, 59, 999)),
    },
  },
  {
    timestamps: true,
  }
);

const PrivateTask = mongoose.model("PrivateTask", privateTask);

module.exports = PrivateTask;
