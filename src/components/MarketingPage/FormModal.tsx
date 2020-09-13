import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Input {
  username: string;
}

const FormModal = () => {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, errors } = useForm<Input>();
  const [url, setUrl] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [server, setServer] = useState("");
  const [counter, setCounter] = useState(0);
  const token = "abc";
  const [clickedLink, setClickedLink] = useState(false);
  const [one, setOne] = useState(false);

  useEffect(() => {
    //  console.log("running ");
    function getUserTwo() {
      return axios
        .get("http://localhost:5000/usertwo/getuser")
        .then((res) => {
          console.log("here is the value ", res.data);
          setClickedLink(false);
          setCounter(0);
          setServer(res.data);
          reset();
          console.log("we got the value!!");
        })
        .catch((err) => {
          console.log("there is an error ", err);
        });
    }
    if (clickedLink) {
      setTimeout(() => {
        setCounter(counter + 1);
        console.log("count here ", counter);
        console.log("calling server");
        getUserTwo();
      }, 4000);
    }
  }, [counter, clickedLink]);

  function getUserTwo() {
    return axios
      .get("http://localhost:5000/usertwo/getuser")
      .then((res) => {
        console.log("here is the value ", res.data);
        setClickedLink(false);
        setCounter(0);
        setServer(res.data);
        console.log("we got the value!!");
      })
      .catch((err) => {
        console.log("there is an error ", err.response);
      });
  }
  if (clickedLink) {
    setTimeout(() => {
      // setCounter(counter + 1);
      // console.log("count here ", counter);
      console.log("calling server");
      getUserTwo();
    }, 4000);
  }

  console.log("whats clicked ", clickedLink);

  const onSubmit = (values: Input) => {
    setOpen(false);
    //  reset();
    let obj = { ...values, username2: server };
    console.log("what is th actual value ", obj);
  };

  const handleValueTwo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValueTwo(e.target.value);
    console.log("what is the value ", e.target.value);
  };

  const generateLink = () => {
    const url = `http://localhost:3002/users/${token}`;
    setUrl(url);
    setClickedLink(true);
    setOne(true);
  };
  return (
    <div>
      <button className="button" onClick={() => setOpen(true)}>
        try it now
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="FormModal">
          <h2>Enter Spotify Usernames</h2>
          <p className="form-description">
            You can either enter only your username or enter a friend username
            to combine both of your playlist and give a a playlist with your
            most listened songs!
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

            {one ? (
              <p>{server && "We got your friends username."}</p>
            ) : (
              <p>
                <label htmlFor="username2">
                  {/**
               Spotify username 2:
            */}
                  Spotify username 2:
                  <input
                    type="text"
                    name="username2"
                    id="username2"
                    ref={register}
                    value={server}
                    onChange={handleValueTwo}
                    // placeholder="Spotify Username 2 (Optional)"
                  />
                </label>
              </p>
            )}

            <p className="share-link">
              Don't have a second user name? copy a link and send it to one of
              your friends. <span onClick={generateLink}>Click here</span>
            </p>
            {url ? <p>{url}</p> : ""}
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
