const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Appointment {
    _id: ID
    clientName: String
    time: Date
    description: String
  }

  type Query {
    appointments: [Appointment]!
    appointment(appointmentId: ID!): Appointment
  }

  type Mutation {
    addAppointment(
      clientName: String!
      time: Date!
      description: String!
    ): Appointment
    removeAppointment(appointmentId: ID!): Appointment
  }
`;

module.exports = typeDefs;
