import React from "react";
import { Route } from "react-router-dom";
import MarketingHomePage from "./MarketingPage/MarketingHomePage";
import Spotify from "./MarketingPage/Spotify";
import UsernamesForm from "./MarketingPage/UsernamesForm";

const MainApp = () => {
  return (
    <div>
      <Route exact path="/">
        <MarketingHomePage />
      </Route>

      <Route exact path="/users/:token">
        <UsernamesForm />
      </Route>
      <Spotify />
    </div>
  );
};
export default MainApp;
