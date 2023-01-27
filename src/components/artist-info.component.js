import React, { useEffect } from "react";



const ArtistInfo = ({ filteredArtist }) => {

    // useEffect(() => {

    // })
    
    const {artist_name} = filteredArtist[0]
    
    return (
        <h1>{artist_name}</h1>
    );
}

export default ArtistInfo