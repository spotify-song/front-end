import React from "react";
import { Route } from "react-router-dom";
import MarketingHomePage from "./MarketingPage/MarketingHomePage";
import UsernamesForm from "./MarketingPage/UsernamesForm";

const MainApp2 = () => {
  return (
    <div>
      <Route exact path="/">
        <MarketingHomePage />
      </Route>

      <Route exact path="/users/:token">
        <UsernamesForm />
      </Route>
    </div>
  );
};
export default MainApp2;
