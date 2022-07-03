import React, { useState } from "react";
import Axios from "axios";
import OptionScreenHeader from "../components/OptionScreenHeader.js";
import "./styles/GenreScreen.css";
const GenreScreen = ({ token, setToken }) => {
  /**
   * @type {Object.<string, number>}
   */
  const [playlists, setPlaylists] = useState([]);

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
    <div className="genreScreen">
      <OptionScreenHeader token={token} setToken={setToken} />
      <div className="headerContainer">
        <h1 className="header">Genre Page</h1>
      </div>
      <div className="playlistContainer">
        <button onClick={getPlaylists}>Get Playlists</button>
        <div className="playlistList">
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <img alt="Playlist" src={playlist.image[1]}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreScreen;
