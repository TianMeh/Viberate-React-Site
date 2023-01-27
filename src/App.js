import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation.component";

import Umek from "./routes/artists/umek.route";
import ArianaGrande from "./routes/artists/ariana-grande.route";
import BlackPink from "./routes/artists/blackpink.route";

const App = () => {
  const [artists, setArtists] = useState();
  const [clickedArtist, setClickedArtist] = useState()

  useEffect(() => {
    fetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
      .then((response) => response.json())
      .then((result) => setArtists(result));
  }, []);

  return !artists ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation artists={artists} setClickedArtist={setClickedArtist} />}>
        <Route path="umek" element={<Umek />} />
        <Route
          path="ariana-grande"
          element={<ArianaGrande artists={artists} />}
        />
        <Route path="blackpink" element={<BlackPink artists={artists} />} />
      </Route>
    </Routes>
  );
};

export default App;
