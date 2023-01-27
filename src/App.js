import React, { useEffect, useState } from "react";

import Navigation from "./components/navigation.component";
import ArtistData from "./components/artist-data.component";

const App = () => {
  const [artists, setArtists] = useState([]);
  const [clickedArtist, setClickedArtist] = useState("umek");

  useEffect(() => {
    fetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
      .then((response) => response.json())
      .then((result) => setArtists(result.all_artists));
  }, []);

  const filteredArtist = artists.filter((artist, i) => {
    return artist.artist_name.toLowerCase().includes(clickedArtist.toLowerCase())
  })

  return (artists.length === 0) ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Navigation artists={artists} setClickedArtist={setClickedArtist}/>
      <ArtistData filteredArtist={filteredArtist} />
    </>
  );
};

export default App;
