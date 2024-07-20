import { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <div className="home-top">
              <div className="left">
                <h3 className="h3">
                  <img
                    src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_achievement.6722fe43.webp&w=64&q=75"
                    alt="badge-image"
                    className="badge-image"
                  />
                  WORLD’S LARGEST APP FOR HINDU DEVOTEES
                </h3>
                <h1>
                  Pray daily with <span className="orange">Sri Mandir</span>.One
                  App for all your devotional needs.
                </h1>
                <div>
                  <Link to="https://play.google.com/store/apps/details?id=com.mandir">
                    <img
                      src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=640&q=75"
                      alt="playstore"
                    />
                  </Link>
                  <Link to="https://apps.apple.com/in/app/sri-mandir-your-own-temple/id1637621461">
                    <img
                      src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=640&q=75"
                      alt="applestore"
                    />
                  </Link>
                </div>
              </div>
              <img
                className="srimandir-banner-image"
                src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1920&q=75"
                alt="srimandir-banner"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
