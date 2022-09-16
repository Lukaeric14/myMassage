const { Appointment } = require("../models");
const { GraphQLScalarType } = require("graphql");

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.toISOString();
    },
  }),
  Query: {
    appointments: async () => {
      return Appointment.find();
    },

    appointment: async (parent, { appointmentId }) => {
      return Appointment.findOne({ _id: appointmentId });
    },
  },

  Mutation: {
    addAppointment: async (parent, appointment) => {
      return Appointment.create(appointment);
    },
    removeAppointment: async (parent, { appointmentId }) => {
      return Appointment.findOneAndDelete({ _id: appointmentId });
    },
  },
};

module.exports = resolvers;
