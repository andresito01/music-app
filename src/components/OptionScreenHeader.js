import React from "react";
import Login from "./Login.js";
import GoHomeButton from "./GoHomeButton.js";
import "./styles/OptionScreenHeader.css";

const OptionScreenHeader = ({ token, setToken }) => {
  return (
    <div className="OptionScreenHeaderContainer">
      <GoHomeButton />
      <Login token={token} setToken={setToken} />
    </div>
  );
};

export default OptionScreenHeader;
