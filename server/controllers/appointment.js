const { getHolidays } = require("../helpers/getHolidays");
const Appointment = require("../models/Appointment");

module.exports = {
  addAppointment: async (req, res) => {
    try {
      const holidays = await getHolidays();

      const bookingDate = new Date(req.body.time);

      const formattedDate = `${bookingDate.getFullYear()}-${
        bookingDate.getMonth() + 1 > 9
          ? bookingDate.getMonth() + 1
          : `0${bookingDate.getMonth() + 1}`
      }-${
        bookingDate.getDate() > 9
          ? bookingDate.getDate()
          : `0${bookingDate.getDate()}`
      }`;
      if (holidays.map((x) => x.date).includes(formattedDate)) {
        return res.status(400).send("You are trying to book on a holiday");
      }

      const appointment = await Appointment.create(req.body);
      return res.json(appointment);
    } catch (err) {
      console.log("Error adding appointment", err);
      res.status(500).send(err.message);
    }
  },
};
