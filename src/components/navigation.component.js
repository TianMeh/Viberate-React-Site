import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = ({ artists }) => {
  const umek = artists.all_artists[0].artist_name
  const arianaGrande = artists.all_artists[1].artist_name
  const blackpink = artists.all_artists[2].artist_name

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
                <Link to="/">
                  {umek}
                </Link>
              </li>
              <li>
                <a href="">{arianaGrande}</a>
              </li>
              <li>
                <a href="">{blackpink}</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- /page --> */}
      </header>
      {/* <!-- /HEADER --> */}
      <Outlet />
    </>
  );
};

export default Navigation;
