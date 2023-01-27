import React, { useEffect, useState } from "react";

import ArtistScreen from "./artist-screen.container";

const ArtistData = ({ filteredArtist }) => {
  const [artistData, setArtistData] = useState([]);
  const { artist_uuid } = filteredArtist[0];
  const artistUrl = `https://run.mocky.io/v3/${artist_uuid}`;

  useEffect(() => {
    fetch(artistUrl)
      .then((response) => response.json())
      .then((result) => setArtistData(result));
  }, [artistUrl]);

  return artistData.length === 0 ? (
    <h1>loading...</h1>
  ) : (
    <ArtistScreen artistData={artistData} />
  );
};

export default ArtistData;
