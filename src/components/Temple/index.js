import { Component } from "react";
import Header from "../Header";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class Temple extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="temple-container">
          <div className="temple-top">
            <div className="left">
              <h1>Connect with holy pilgrimages and divine temples of India</h1>
              <ul className="temple-ul">
                <li>
                  <TbSquareRoundedArrowRightFilled color="orange" size={14} />
                  Learn about the culture and religious history of temples
                </li>
                <li>
                  <TbSquareRoundedArrowRightFilled color="orange" size={14} />
                  Connect with temples of your favourite deities
                </li>
                <li>
                  <TbSquareRoundedArrowRightFilled color="orange" size={14} />
                  Offer charity work and donate in your favourite temples
                </li>
              </ul>
              <div className="temple-button-container">
                <button className="orange-button">
                  Explore temples of India
                </button>
                <button className="transparent-button">+ Add Temples</button>
              </div>
            </div>
            <img
              className="india-map"
              src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.0462daf4.png&w=1920&q=75"
              alt="india"
            />
          </div>
          <Carousel responsive={responsive}>
            <div>
              <button className="orange-button">All</button>
            </div>
            <div>
              <button className="orange-button">Ayodhya</button>
            </div>
            <div>
              <button className="orange-button">Bhopal</button>
            </div>
            <div>
              <button className="orange-button">Varanasi</button>
            </div>
            <div>
              <button className="orange-button">Prayagraraj</button>
            </div>
            <div>
              <button className="orange-button">Viridhvan</button>
            </div>
            <div>
              <button className="orange-button">Ujjain</button>
            </div>
          </Carousel>
          ;
        </div>
      </>
    );
  }
}
export default Temple;
