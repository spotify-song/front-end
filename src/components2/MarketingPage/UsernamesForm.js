import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

const FormModal = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const { token } = useParams();

  const onSubmit = (values) => {
    let newVal = { token, ...values };
    //  reset();
    console.log("what are the values now?? ", newVal);
    axios
      .post("http://localhost:5000/usertwo", newVal)
      .then((res) => {
        console.log("the response ", res.data);
      })
      .catch((err) => console.log("error ", err));
  };

  return (
    <div className="FormModal">
      <h2>Enter Spotify Usernames</h2>
      <p className="form-description">
        You can either enter only your username or enter a friend username to
        combine both of your playlist and give a a playlist with your most
        listened songs!
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
