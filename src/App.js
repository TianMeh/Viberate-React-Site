import React, { useEffect, useState } from "react";

import Navigation from "./containers/navigation.container";
import ArtistData from "./containers/artist-data.container";

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [artists, setArtists] = useState([]);
  const [clickedArtist, setClickedArtist] = useState("umek");

  useEffect(() => {
    setIsLoading(true)
    fetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false)
        setArtists(result.all_artists)})
        .catch((err) => {
          setIsLoading(false);
          setError(err)
        })
  }, []);

  const filteredArtist = artists.filter((artist) => {
    return artist.artist_name
      .toLowerCase()
      .includes(clickedArtist.toLowerCase());
  });

  return (
    <>
      {error && <h1>Oops something went wrong</h1>}
      {isLoading && <h1>Loading...</h1>}
      {artists.length === 0 && !isLoading && <h1>No artists found</h1>}
      {artists.length !== 0 && <Navigation artists={artists} setClickedArtist={setClickedArtist} />}
      {filteredArtist.length !== 0 && <ArtistData filteredArtist={filteredArtist} />}
    </>
  )
};

export default App;
