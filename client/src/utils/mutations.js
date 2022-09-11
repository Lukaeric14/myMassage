import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $clientName: String!
    $time: Date!
    $description: String!
    $duration: Int!
  ) {
    addAppointment(
      clientName: $clientName
      time: $time
      description: $description
      duration: $duration
    ) {
      _id
      clientName
      time
      description
      duration
    }
  }
`;
