import React, { useEffect, useState } from "react";

import ArtistScreen from "./artist-screen.container";

const ArtistData = ({ filteredArtist }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [artistData, setArtistData] = useState([]);
  const { artist_uuid } = filteredArtist[0];
  const artistUrl = `https://run.mocky.io/v3/${artist_uuid}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(artistUrl)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setError(null);
        setArtistData(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [artistUrl]);

  return (
    <>
      {error && <h1>Oops something went wrong</h1>}
      {isLoading && <h1>Loading...</h1>}
      {artistData.length === 0 && !isLoading && <h1>Cannot find any artists...</h1>}
      {artistData.length !== 0 && <ArtistScreen artistData={artistData} />}
    </>
  );
};

export default ArtistData;
