import React from "react";
import { Route } from "react-router-dom";
import UserAccount from "./account/UserAccount";
import GetSpotifyAccess from "./MarketingPage/GetSpotifyAccess";
import MarketingHomePage from "./MarketingPage/MarketingHomePage";
import UsernamesForm from "./MarketingPage/UsernamesForm";

const MainApp = () => {
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
      <Route exact path="/">
        <MarketingHomePage />
      </Route>

      <Route exact path="/users/:token">
        <UsernamesForm />
      </Route>
      <Route exact path="/account">
        <UserAccount getHashParams={getHashParams} />
      </Route>
      {/* <GetSpotifyAccess /> */}
    </div>
  );
};
export default MainApp;
