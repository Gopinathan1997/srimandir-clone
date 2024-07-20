import { Component } from "react";
import Header from "../Header";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PujaItems from "../PujaItems";
import "./index.css";

class Puja extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="puja-container">
          <h1>
            Perform your Puja as per Vedic rituals at Famous Hindu Temples in
            India with Sri Mandir devotee devotee
          </h1>
          <Carousel autoPlay>
            <div>
                
              <img alt='devotees' src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_devotees.0a33e17d.webp&w=3840&q=75" />
            </div>
            <div>

              <img alt="" src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_puja.f8a35e8a.webp&w=3840&q=75" />
            </div>
            <div>
              <img alt="" src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75" />
            </div>
          </Carousel>
          <hr />
          <h1>Upcoming Pujas on Sri Mandir.</h1>
          <p>
            Book online puja with Sri Mandir in more than 500+ temples across
            India. Receive video of the puja along with the Prasad and receive
            blessings from the divine for prosperity and well-being of you and
            your family
          </p>
          <PujaItems/>
        </div>
      </>
    );
  }
}
export default Puja;
