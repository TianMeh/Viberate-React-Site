/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/logo-v.svg"

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
          <a className="logo">
            <img src={Logo} alt="Viberate" /> Viberate
          </a>

          <nav className="navigation-primary">
            <ul className="menu-sys">
              <li>
                <button className="btn btn-menu search">
                  Search
                </button>
              </li>
              <li>
                <button className="btn btn-menu more">More</button>
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
