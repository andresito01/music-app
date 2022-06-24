import React from "react";
import "./styles/Login.css";
const Login = ({ token, setToken }) => {
  // Constants needed to create spotify login url.
  const CLIENT_ID = "a8bcca35db8943789ad9841ca5fa794f";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="loginContainer">
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          <button>Login To Spotify</button>
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Login;
