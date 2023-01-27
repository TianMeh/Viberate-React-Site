import React from "react";

const Navigation = ({ artists, setClickedArtist }) => {
  const umek = artists[0].artist_name;
  const arianaGrande = artists[1].artist_name;
  const blackpink = artists[2].artist_name;

  const setUmek = () => {
    setClickedArtist(umek);
  };

  const setAriana = () => {
    setClickedArtist(arianaGrande);
  };

  const setBlackpink = () => {
    setClickedArtist(blackpink);
  };

  return (
    <>
      <header className="header">
        {/* <!-- page --> */}
        <div className="page">
          <a href="#" className="logo">
            <img src="./exercise-01_files/logo-v.svg" alt="Viberate" /> Viberate
          </a>

          <nav className="navigation-primary">
            <ul className="menu-sys">
              <li>
                <button style={{ color: "white" }} class="btn  search">
                  Search
                </button>
              </li>
              <li>
                <button className="btn more">More</button>
              </li>
            </ul>
            <ul className="menu">
              <li>
                <a onClick={setUmek}>{umek}</a>
              </li>
              <li>
                <a onClick={setAriana}>{arianaGrande}</a>
              </li>
              <li>
                <a onClick={setBlackpink}>{blackpink}</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- /page --> */}
      </header>
      {/* <!-- /HEADER --> */}
    </>
  );
};

export default Navigation;
