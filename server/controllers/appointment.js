const Appointment = require("../models/Appointment");

module.exports = {
  addAppointment: async (req, res) => {
    try {
      const appointment = await Appointment.create(req.body);
      return res.json(appointment);
    } catch (err) {
      console.log("Error adding appointment", err);
      res.status(500).send(err.message);
    }
  },
};
