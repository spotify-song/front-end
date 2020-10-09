import React, { useEffect } from "react";
import "react-responsive-modal/styles.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io(`${process.env.REACT_APP_API_SERVER_URL}`);
// const socket = io(`http://localhost:5000/`);

interface Inputs {
  username: string;
}
const FormModal = () => {
  const { register, handleSubmit, reset, errors } = useForm<Inputs>();
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });
  }, []);

  const onSubmit = (values: Inputs) => {
    let newVal = { token, ...values };
    reset();
    socket.emit("send_user", newVal);
  };

  return (
    <div className="SecondUser">
      <h2>Enter Spotify Username</h2>
      <p className="form-description">
        One of your friends have requested your Spotify Username.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor="username">
            {/**
               Spotify username:
            */}
            Spotify username:
            <input
              type="text"
              name="username"
              id="username"
              ref={register({ required: true })}

              // placeholder="Spotify Username"
            />
            <span className="error">
              {errors.username && "Username Require"}
            </span>
          </label>
        </p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormModal;
