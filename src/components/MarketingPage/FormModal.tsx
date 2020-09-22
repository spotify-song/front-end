import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
  const [server, setServer] = useState<UserName | null>(null);
  const [clickedLink, setClickedLink] = useState(false);
  const [one, setOne] = useState(false);
  const token = uuidv4();

  function getUserTwo() {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER_URL}/usertwo/getuser`)
      .then((res) => {
        setClickedLink(false);
        setServer(res.data);
      })
      .catch((err) => {
        console.log("there is an error ", err.response);
      });
  }

  if (clickedLink) {
    setTimeout(() => {
      getUserTwo();
    }, 4000);
  }

  const onSubmit = (values: Input) => {
    setOpen(false);
    setValueTwo("");
    let user = server?.username;
    let obj = { ...values, username2: user || valueTwo };
    setOne(false);
    setUrl("");
    setServer(null);
    setClickedLink(false);
    reset();
    axios
      .get(
        `${process.env.REACT_APP_API_DS_URL}/users/{user_id_1,user_id_2}?user_id_1=${obj.username}&user_id_2=${obj.username2}`
      )
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValueTwo = (e: { target: { value: any } }) => {
    setValueTwo(e.target.value);
  };

  const generateLink = () => {
    const url = `${process.env.REACT_APP_API_URL}/users/${token}`;
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
              <p className="successfull-mg">
                {server && "We got your friends username."}
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
                    value={server?.username || valueTwo}
                    onChange={handleValueTwo}
                  />
                </label>
              </p>
            )}

            {!server ? (
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
