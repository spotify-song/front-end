import React, { useState, useEffect } from "react";
import axios from "axios";

var client_id = process.env.REACT_APP_API_CLIENT_ID; // Your client id
// var client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REACT_APP_API_REDIRECT_URI;
var scope =
  "user-read-private user-read-email streaming user-read-currently-playing user-read-playback-state user-library-read user-library-modify user-modify-playback-state playlist-modify-public playlist-modify-private";

const Spotify = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    setParams(getHashParams());
  }, []);

  console.log("params ", params);

  function getHashParams() {
    var hashParams: { [char: string]: string } = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    // setParams(hashParams);
    return hashParams;
  }
  return (
    <div>
      <h3>hello</h3>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(
          scope
        )}&response_type=token&show_dialog=true`}
      >
        here{" "}
      </a>
    </div>
  );
};

export default Spotify;
