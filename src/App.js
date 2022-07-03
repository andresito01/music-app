import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import HomeScreen from "./routes/HomeScreen.js";
import GenreScreen from "./routes/GenreScreen.js";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen token={token} setToken={setToken} />}
          />
          <Route
            path="/genre"
            element={<GenreScreen token={token} setToken={setToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
