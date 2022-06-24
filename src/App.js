import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import HomeScreen from "./routes/HomeScreen.js";
import GenreScreen from "./routes/GenreScreen.js";

function App() {
  const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);

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

  const getPlaylists = () => {
    Axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setPlaylists(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen token={token} setToken={setToken} />}
          />
          <Route path="/genre" element={<GenreScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*

{!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

    */
