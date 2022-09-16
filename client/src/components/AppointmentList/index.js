import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";

const GET_APPOINTMENTS = gql`
  query Appointments {
    appointments {
      clientName
      time
      duration
      description
    }
  }
`;

const AppointmentList = () => {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS);

  const appointments = data?.appointments;
  if (!appointments?.length) {
    return <h3>No Appointments Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">Appointments</h3>
      <div className="flex-row justify-space-between my-4">
        <table width="100%" className="w-full text-center">
          <th>Name</th>
          <th>Time</th>
          <th>Duration</th>
          <th>Description</th>
          {appointments &&
            appointments.map((appointment) => {
              return (
                <tr>
                  <td>{appointment.clientName} </td>
                  <td>
                    {dayjs(appointment.time).format("YYYY-MM-DD HH:mm:ss")}{" "}
                  </td>
                  <td>{appointment.duration} </td>
                  <td>{appointment.description} </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
