import React from "react";

var client_id = process.env.REACT_APP_API_CLIENT_ID; // Your client id
// var client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
// var redirect_uri = process.env.REACT_APP_API_REDIRECT_URI;
let redirect_uri = "http%3A%2F%2Flocalhost%3A3000%2Faccount/";
var scope =
  "user-read-private user-read-email streaming user-read-currently-playing user-read-playback-state user-library-read user-library-modify user-modify-playback-state playlist-modify-public playlist-modify-private";

const GetSpotifyAccess = () => {
  return (
    <>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(
          scope
        )}&response_type=token&show_dialog=true`}
      >
        click here
      </a>
    </>
  );
};

export default GetSpotifyAccess;
