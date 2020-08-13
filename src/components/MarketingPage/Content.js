import React from "react";
import { GoPlay } from "react-icons/go";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

const Content = () => {
  return (
    <div className="main-container">
      <section className="section">
        <h2>tired of wasting time looking for the right tracks?</h2>
        <div className="section-one">
          <div className="left-side">
            <p>
              We've created Spotify SongSuggester for people tired of wasting
              time looking for the music they love and not able to find it. Have
              you ever been listening to music and for some random reason the
              next song on your track is totally different from what you are
              listening to? If that is the case then you will love Spotify
              SongSuggester. Our app will make sure that never happens to you.
            </p>
          </div>
          <div className="img-container"></div>
        </div>
      </section>
      <section className="section-two">
        <h2>why choose Spotify SongSuggester?</h2>
        <div className="section-two-container">
          <div className="logo logo-one">
            <div>
              <FaExclamationCircle />
            </div>
            <p>Say bye to ads.</p>
            <span>Enjoy nonstop music.</span>
          </div>
          <div className="logo logo-one">
            <div>
              <GoPlay />
            </div>
            <p>Play what you want anywhere you want.</p>
            <span>even on mobile.</span>
          </div>
          <div className="logo logo-one">
            <div>
              <FaArrowAltCircleRight />
            </div>
            <p>Unlimited skips.</p>
            <span>Just hit next.</span>
          </div>
        </div>
      </section>

      {/* */}
      <section className="section-three">
        <h2>Choose subscription</h2>
        <div className="section-three-container">
          <div className="basic subscripions">
            <span className="month-free">1 month free</span>
            <h2>basic</h2>
            <p>$00.00/month after</p>

            <p className="bottom-border">UP to 5 accounts</p>
            <div className="t-b-container">
              <div className="top">
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Listen to music ad-free
                </p>

                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  On-demand playback
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Block explicit music
                </p>
              </div>
              <div className="bottom">
                <div className="btn-container">
                  <button>get started</button>
                </div>
                <span className="terms">
                  <a href="www.google.com">Term and conditions apply.</a>1 month
                  free not avalible for users who have already tried Premium
                </span>
              </div>
            </div>
          </div>

          <div className="premium subscripions">
            <span className="month-free">1 month free</span>
            <h2>Premium</h2>
            <p>$0.00/month after</p>
            <p className="bottom-border">UP to 10 accounts</p>
            <div className="t-b-container">
              <div className="top">
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Listen to music ad-free
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Play anywhere - even offline
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  On-demand playback
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Block explicit music
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  On-demand playback
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Block explicit music
                </p>
              </div>
              <div className="bottom">
                <div className="btn-container">
                  <button>get started</button>
                </div>
                <span className="terms">
                  <a href="www.google.com">Term and conditions apply.</a>1 month
                  free not avalible for users who have already tried Premium
                </span>
              </div>
            </div>
          </div>

          <div className="premium subscripions">
            <span className="month-free">1 month free</span>
            <h2>annually</h2>
            <p>$0.00/one time payment</p>
            <p className="bottom-border">UP to 15 accounts</p>
            <div className="t-b-container">
              <div className="top">
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Listen to music ad-free
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Play anywhere - even offline
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  On-demand playback
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Block explicit music
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  On-demand playback
                </p>
                <p>
                  <span className="checkmark">
                    <BsCheck />
                  </span>
                  Block explicit music
                </p>
              </div>
              <div className="bottom">
                <div className="btn-container">
                  <button>get started</button>
                </div>
                <span className="terms">
                  <a href="www.google.com">Term and conditions apply.</a>1 month
                  free not avalible for users who have already tried Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
