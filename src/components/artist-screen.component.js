import React from "react";

const ArtistScreen = ({artistData}) => {
    return(
        <h1>{artistData.data.name}</h1>
    )
}

export default ArtistScreen