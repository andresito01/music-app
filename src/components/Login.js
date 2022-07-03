import React, { useEffect } from "react";
import "./styles/Login.css";
const Login = ({ token, setToken }) => {
  // Constants needed to create spotify login url.
  const CLIENT_ID = "a8bcca35db8943789ad9841ca5fa794f";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // When the page reloads the spotify access token for the user is saved to local storage
  useEffect(() => {
    const hash = window.location.hash;
    let currentToken = window.localStorage.getItem("token");

    if (!currentToken && hash) {
      currentToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", currentToken);
    }
    setToken(currentToken);
    // eslint-disable-next-line
  }, []);

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
