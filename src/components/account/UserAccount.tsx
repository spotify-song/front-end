import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";

interface Props {
  getHashParams: () => any;
}
const UserAccount: React.FC<Props> = ({ getHashParams }) => {
  const [params, setParams] = useState({});

  //   const params = useRouteMatch();

  useEffect(() => {
    let getToken = getHashParams();
    console.log("what is this value ?? ", getToken);
    setParams(getToken);
    localStorage.setItem("access_token", JSON.stringify(getToken));
  }, []);

  return (
    <div>
      <h3>noooooo</h3>
    </div>
  );
};

export default UserAccount;
