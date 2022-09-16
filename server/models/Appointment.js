const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const appointment = model("Appointment", appointmentSchema);

module.exports = appointment;
