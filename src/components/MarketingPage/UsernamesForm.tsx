import React from "react";
import "react-responsive-modal/styles.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Inputs {
  username: string;
}
const FormModal = () => {
  const { register, handleSubmit, reset, errors } = useForm<Inputs>();
  const { token } = useParams();

  const onSubmit = (values: Inputs) => {
    let newVal = { token, ...values };
    //  reset();
    console.log("what are the values now?? ", newVal);
    axios
      .post("http://localhost:5000/usertwo", newVal)
      .then((res) => {
        console.log("the response ", res.data);
        reset();
      })
      .catch((err) => console.log("error ", err));
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
