import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./styles/HomeScreen.css";
import Login from "../components/Login.js";
import LockImage from "../images/lock.png";
const HomeScreen = ({ token, setToken }) => {
  const navigate = useNavigate();
  // Constants needed to create spotify login url.
  const CLIENT_ID = "a8bcca35db8943789ad9841ca5fa794f";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  return (
    <div className="homeScreen">
      <div className="loginHeaderContainer">
        <Login token={token} setToken={setToken} />
      </div>
      <div className="headerContainer">
        <h1 className="header">Home Page</h1>
      </div>
      {!token ? (
        <div className="lockMenuContainer">
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <img className="lockImage" alt="lock" src={LockImage}></img>
          </a>
          <div className="menuContainer disabled">
            <div className="option purple">
              <h3 className="optionTitle">Genre</h3>
            </div>
            <div className="option blue">
              <h3 className="optionTitle">Artists</h3>
            </div>
            <div className="option yellow">
              <h3 className="optionTitle">Empty</h3>
            </div>
            <div className="option green">
              <h3 className="optionTitle">Empty</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="menuContainer">
          <div
            className="option purple"
            onClick={() => {
              navigate("/genre");
            }}
          >
            <h3 className="optionTitle">Genre</h3>
          </div>
          <div className="option blue">
            <h3 className="optionTitle">Artists</h3>
          </div>
          <div className="option yellow">
            <h3 className="optionTitle">Empty</h3>
          </div>
          <div className="option green">
            <h3 className="optionTitle">Empty</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
