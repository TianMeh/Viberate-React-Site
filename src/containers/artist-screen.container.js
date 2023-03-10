/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import SubgenresVote from "../components/subgenres-vote.component";
import SubgenresNames from "../components/subgenres-names.component";
import SocialList from "../components/social-list.component";
import PopularityChart from "../components/popularity-chart.component";

const ArtistScreen = ({ artistData }) => {
  

  return (
    
    // <!-- MAIN -->
    <main className="main">
      {/* <!-- section-artist-detail --> */}
      <section className="section section-artist-detail trending claimed">
        {/* <!-- page --> */}
        <div className="page">
          {/* <!-- visual --> */}
          <div className="col visual">
            <figure
              style={{
                backgroundImage: `url(${artistData.data.image})`,
              }}
            >
              <figcaption>
                <button className="btn btn-claim-music-id">Claim music_id</button>
              </figcaption>
            </figure>
          </div>
          {/* <!-- /visual --> */}

          <div className="col-wrapper">
            {/* <!-- info --> */}
            <div className="col info">
              <div className="col-content">
                <div className="info-wrapper">
                  <div className="title-wrapper">
                    <button className="btn btn-solid border btn-booking-request">
                      Booking Request
                    </button>
                    <h1 className="title">
                      {artistData.data.name}
                      <div className="tooltip-wrapper">
                        <span className="profile-claimed">Profile claimed</span>
                        <div className="tooltip">
                          <h3>Vote for subgenres</h3>
                          <p>
                            Don’t agree with the subgenres? Add the ones you
                            think are missing or vote for existing to get yours
                            on top!
                          </p>
                          <div className="stats-sheet">
                            <SubgenresVote data={artistData.data} />
                          </div>
                          <p>
                            <button className="btn btn-shadow">Vote now</button>
                          </p>
                        </div>
                      </div>
                      <span className="trending-icon">Trending</span>
                    </h1>
                  </div>

                  <div className="row">
                    <button className="btn btn-save long">Follow</button>
                    <button className="btn btn-share">
                      Share
                      <span>Link copied to clipboard</span>
                    </button>
                  </div>

                  <div className="row">
                    <label>Origin</label>
                    <a className="btn btn-filter-tag">{artistData.data.country.name}</a>
                  </div>

                  <div className="row">
                    <label>Genre</label>
                    <span className="btn btn-filter-tag">{artistData.data.genre.name}</span>
                  </div>

                  <div className="row">
                    <label>Subgenres</label>
                    <SubgenresNames data={artistData.data}/>
                    <div className="tooltip-wrapper">
                      <button className="btn btn-add">Add subgenre</button>
                      <div className="tooltip">
                        <h3>Vote for subgenres</h3>
                        <p>
                          Don’t agree with the subgenres? Add the ones you think
                          are missing or vote for existing to get yours on top!
                        </p>
                        <div className="stats-sheet">
                        <SubgenresVote data={artistData.data} />
                        </div>
                        <p>
                          <button className="btn btn-shadow">Vote now</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-detail">
                  <ul className="social-list">
                    <SocialList data={artistData.data}/>
                  </ul>

                  <div className="tooltip-wrapper">
                    <button className="btn btn-add">Add links</button>
                    <div className="tooltip">
                      <h3>Got more info?</h3>
                      <p>
                        Add Place's links so everyone can see their social media
                        highlights.
                      </p>
                      <p>
                        <button className="btn btn-shadow">Add links</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /info --> */}

            {/* <!-- stats --> */}
            <div className="col stats">
              <div className="col-content">
                <PopularityChart data={artistData.data} />
              </div>
            </div>
            {/* <!-- /stats --> */}
          </div>

          <button className="btn btn-scroll-down">Scroll down</button>
        </div>
        {/* <!-- /page --> */}
      </section>
      {/* <!-- section-artist-detail --> */}
    </main>
    // <!-- /MAIN -->
  );
};

export default ArtistScreen;
