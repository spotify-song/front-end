import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io(`${process.env.REACT_APP_API_SERVER_URL}`);
// const socket = io(`http://localhost:5000/`);

interface Input {
  username: string;
}

interface UserName {
  token?: string;
  username?: string;
}

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, errors } = useForm<Input>();
  const [url, setUrl] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [one, setOne] = useState(false);
  const [token, setToken] = useState(uuidv4());
  const [userTwo, setUserTwo] = useState<UserName | null>(null);

  useEffect(() => {
    socket.on("send_to_friend", (user: any) => {
      if (user.token === token) {
        setUserTwo(user);
        setUrl("");
      }
    });
  }, [token]);

  const onSubmit = (values: Input) => {
    setOpen(false);
    setValueTwo("");
    let user = userTwo?.username;
    let obj = { ...values, username2: user || valueTwo };
    setOne(false);
    setUrl("");
    reset();
    //  axios
    //    .get(
    //      `${process.env.REACT_APP_API_DS_URL}/users/{user_id_1,user_id_2}?user_id_1=${obj.username}&user_id_2=${obj.username2}`
    //    )
    //    .then((res) => {
    //      console.log("response", res);
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
  };

  const handleValueTwo = (e: { target: { value: any } }) => {
    setValueTwo(e.target.value);
  };

  const generateLink = () => {
    const url = `${process.env.REACT_APP_API_URL}/users/${token}`;
    setUrl(url);
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
              <p className="successfull-mg">
                {userTwo && "We got your friends username."}
              </p>
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
                    value={userTwo?.username || valueTwo}
                    onChange={handleValueTwo}
                  />
                </label>
              </p>
            )}

            {!one ? (
              <p className="share-link">
                Don't have a second user name? copy a link and send it to one of
                your friends.{" "}
                <span aria-disabled onClick={generateLink}>
                  Click here
                </span>
              </p>
            ) : (
              ""
            )}

            {url ? <p className="url-link">{url}</p> : ""}
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
