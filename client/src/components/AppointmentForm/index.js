import React, { useState } from "react";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_PROFILE mutation

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    try {
      try {
        const res = await axios.post("/api/appointment", {
          clientName: name,
          time: date,
          description,
          duration: parseInt(duration),
        });
        console.log({ res });
        setMessage(
          "Appointment added successfully! We'll get in touch with you"
        );
        setDate(null);
        setDescription(null);
        setName(null);
        setDate(null);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(err?.response?.data);
      }
      // Execute mutation and pass in defined parameter data as variables
      /*
      const { data } = await addProfile({
        variables: {
          clientName: name,
          time: date,
          description,
          duration: parseInt(duration),
        },
      });
      console.log({ data });
      */
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Book a massage!</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-6">
          <label>Name: </label>
        </div>
        <div className="col-12 col-lg-6">
          <input
            placeholder="Enter your name"
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-6">
          <label>Time: </label>
        </div>
        <div className="col-12 col-lg-6">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              placeholder="Enter your preferred massage time"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
            />
          </LocalizationProvider>
        </div>

        <div className="col-12 col-lg-6">
          <label>Duration: </label>
        </div>
        <div className="col-12 col-lg-6">
          <input
            placeholder="Enter your preferred massage duration"
            value={duration}
            className="form-input w-100"
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-6">
          <label>Comments: </label>
        </div>
        <div className="col-12 col-lg-6">
          <input
            placeholder="Enter comments"
            value={description}
            className="form-input w-100"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Book Massage
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">{error}</div>
        )}
        {message && (
          <div className="col-12 my-3 bg-success text-black p-3">{message}</div>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
