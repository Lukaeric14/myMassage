const appointmentController = require("../controllers/appointment");

const router = require("express").Router();

router.route("/appointment").post(appointmentController.addAppointment);

module.exports = router;
