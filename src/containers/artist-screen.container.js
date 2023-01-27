import React from "react";

import SubgenresVote from "../components/subgenres-vote.component";
import SubgenresNames from "../components/subgenres-names.component";

const ArtistScreen = ({ artistData }) => {
  const { data } = artistData;

  return (
    // <!-- MAIN -->
    <main class="main">
      {/* <!-- section-artist-detail --> */}
      <section class="section section-artist-detail trending claimed">
        {/* <!-- page --> */}
        <div class="page">
          {/* <!-- visual --> */}
          <div class="col visual">
            <figure
              style={{
                backgroundImage: `url(${data.image})`,
              }}
            >
              <figcaption>
                <button class="btn btn-claim-music-id">Claim music_id</button>
              </figcaption>
            </figure>
          </div>
          {/* <!-- /visual --> */}

          <div class="col-wrapper">
            {/* <!-- info --> */}
            <div class="col info">
              <div class="col-content">
                <div class="info-wrapper">
                  <div class="title-wrapper">
                    <button class="btn btn-solid border btn-booking-request">
                      Booking Request
                    </button>
                    <h1 class="title">
                      {data.name}
                      <div class="tooltip-wrapper">
                        <span class="profile-claimed">Profile claimed</span>
                        <div class="tooltip">
                          <h3>Vote for subgenres</h3>
                          <p>
                            Don’t agree with the subgenres? Add the ones you
                            think are missing or vote for existing to get yours
                            on top!
                          </p>
                          <div class="stats-sheet">
                            <SubgenresVote data={data} />
                          </div>
                          <p>
                            <button class="btn btn-shadow">Vote now</button>
                          </p>
                        </div>
                      </div>
                      <span class="trending-icon">Trending</span>
                    </h1>
                  </div>

                  <div class="row">
                    <button class="btn btn-save long">Follow</button>
                    <button class="btn btn-share">
                      Share
                      <span>Link copied to clipboard</span>
                    </button>
                  </div>

                  <div class="row">
                    <label>Origin</label>
                    <a class="btn btn-filter-tag">{data.country.name}</a>
                  </div>

                  <div class="row">
                    <label>Genre</label>
                    <span class="btn btn-filter-tag">{data.genre.name}</span>
                  </div>

                  <div class="row">
                    <label>Subgenres</label>
                    <SubgenresNames data={data}/>
                    <div class="tooltip-wrapper">
                      <button class="btn btn-add">Add subgenre</button>
                      <div class="tooltip">
                        <h3>Vote for subgenres</h3>
                        <p>
                          Don’t agree with the subgenres? Add the ones you think
                          are missing or vote for existing to get yours on top!
                        </p>
                        <div class="stats-sheet">
                        <SubgenresVote data={data} />
                        </div>
                        <p>
                          <button class="btn btn-shadow">Vote now</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="footer-detail">
                  <ul class="social-list">
                    <li>
                      <a href="#" class="btn social-icon facebook">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon twitter">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon instagram">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon spotify">
                        Spotify
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon songkick">
                        Songkick
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon soundcloud">
                        soundcloud
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon youtube">
                        youtube
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon beatport">
                        beatport
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon mixcloud">
                        mixcloud
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon gigatools">
                        gigatools
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon eventbrite">
                        eventbrite
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon skiddle">
                        skiddle
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon ticketmaster">
                        ticketmaster
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon tumblr">
                        tumblr
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon google_plus">
                        google_plus
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon google_play_music">
                        google_play_music
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon bandsintown">
                        bandsintown
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon itunes">
                        itunes
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon shazam">
                        shazam
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon deezer">
                        deezer
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon medium">
                        medium
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon telegram">
                        telegram
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon home_page">
                        home_page
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon tidal">
                        tidal
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon napster">
                        napster
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn social-icon amazon_music">
                        amazon_music
                      </a>
                    </li>
                  </ul>

                  <div class="tooltip-wrapper">
                    <button class="btn btn-add">Add links</button>
                    <div class="tooltip">
                      <h3>Got more info?</h3>
                      <p>
                        Add Place's links so everyone can see their social media
                        highlights.
                      </p>
                      <p>
                        <button class="btn btn-shadow">Add links</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /info --> */}

            {/* <!-- stats --> */}
            <div class="col stats">
              <div class="col-content">
                <div class="stats-sheet">
                  <label>Most popular in</label>
                  <div class="row">
                    <h5>Ljubljana</h5>
                    <div class="graph-line">
                      <span class="line" style={{ width: "47%" }}>
                        47%
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <h5>Maribor</h5>
                    <div class="graph-line">
                      <span class="line" style={{ width: "23%" }}>
                        23%
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <h5>Celje</h5>
                    <div class="graph-line">
                      <span class="line" style={{ width: "15%" }}>
                        15%
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <h5>Postojna</h5>
                    <div class="graph-line">
                      <span class="line" style={{ width: "11%" }}>
                        11%
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <h5>Koper</h5>
                    <div class="graph-line">
                      <span class="line" style={{ width: "9%" }}>
                        9%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /stats --> */}
          </div>

          <button class="btn btn-scroll-down">Scroll down</button>
        </div>
        {/* <!-- /page --> */}
      </section>
      {/* <!-- section-artist-detail --> */}
    </main>
    // <!-- /MAIN -->
  );
};

export default ArtistScreen;
