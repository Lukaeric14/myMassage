import React from "react";
import { useQuery } from "@apollo/client";
import AppointmentForm from "../components/AppointmentForm";

import { QUERY_PROFILES } from "../utils/queries";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AppointmentList from "../components/AppointmentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppointmentForm />,
  },
  {
    path: "/bookings",
    element: <AppointmentList />,
  },
]);

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </main>
  );
};

export default Home;
