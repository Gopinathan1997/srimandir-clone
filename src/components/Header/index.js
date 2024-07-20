import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  IoIosBonfire,
  IoIosArrowDown,
  IoMdPerson,
  IoIosArrowForward,
  IoIosListBox,
} from "react-icons/io";

import "./index.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <img
        className="logo"
        src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=256&q=75"
        alt="logo"
      />
      <ul className="nav-menu">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/puja">
            Puja
          </Link>
        </li>
        <li>
          <Link className="link" to="/temple">
            Temples
          </Link>
        </li>
        <li>
          <Link className="link" to="/library">
            Library
          </Link>
          <Popup
            className="popup-content"
            trigger={
              <button className="popup-button">
                <IoIosArrowDown />
              </button>
            }
            position="bottom"
          >
            <ul className="popup-ul">
              <li className="flex">
                <img
                  className="icon"
                  alt="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_chalisa.6253bcdc.svg&w=48&q=75"
                />
                <span>
                  Sanatan Sahitya
                  <span className="black">read all articles</span>
                </span>
              </li>
              <li className="flex">
                <img
                  className="icon"
                  alt="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_aarti.3e170fee.svg&w=48&q=75"
                />
                <span>
                  Aarti
                  <span className="black">
                    Commmence your poojas with aartis
                  </span>
                </span>
              </li>
              <li className="flex">
                <img
                  alt="icon"
                  className="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_chalisa.6253bcdc.svg&w=48&q=75"
                />
                <span>
                  Chalisa
                  <span className="black">Seek Divie's Grace with Chalisa</span>
                </span>
              </li>
              <li className="flex">
                <img
                  alt="icon"
                  className="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_mantra.93ac210a.svg&w=48&q=75"
                />
                <span>
                  Mantra
                  <span className="black">
                    Meditate and Chant with Powerful Mantras
                  </span>
                </span>
              </li>
              <li className="flex">
                <img
                  alt="icon"
                  className="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_bhajan.7cb97e79.svg&w=48&q=75"
                />
                <span>
                  Incarnation of gods and godessess
                  <span className="black">
                    Stories of Incarnation of all gods and goddessess
                  </span>
                </span>
              </li>
              <li className="flex">
                <img
                  alt="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_festivals.bed5de73.svg&w=48&q=75"
                  className="icon"
                />
                <span>
                  Shrimad Bhagwat - Interesting Stories
                  <span className="black">
                    Learn Interesting facts related to Gita
                  </span>
                </span>
              </li>
              <li className="flex">
                <img
                  alt="icon"
                  src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_ayurvedic.0d504fe4.svg&w=48&q=75"
                  className="icon"
                />
                <span>
                  Ayurvedic and Home Remedies
                  <span className="black">
                    Ancient wisdom meets natural heelings
                  </span>
                </span>
              </li>
            </ul>
          </Popup>
        </li>
      </ul>

      <Popup
        trigger={
          <button className="popup-button">
            <img
              src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDefault%20Profile.619cb564.svg&w=48&q=75"
              alt="profile"
            />
          </button>
        }
        position="bottom"
      >
        <div>
          <p>To check all available pujas & offers:</p>
          <button className="login">Login / Create an account</button>
          <hr />
          <span className="black">Account Details</span>
          <ul className="side-bar">
            <li className="side-list">
              <p>
                <IoMdPerson />
                My Profile
              </p>
              <IoIosArrowForward />
            </li>
            <li className="side-list">
              <p>
                <IoIosListBox />
                My Puja Booking
              </p>
              <IoIosArrowForward />
            </li>
            <li className="side-list">
              <p>
                <IoIosListBox />
                My Ramotsav Booking
              </p>
              <IoIosArrowForward />
            </li>
            <Link to='puja' className="side-list">
              <p>
                <IoIosBonfire />
                Book a Puja
              </p>
              <IoIosArrowForward />
            </Link>
          </ul>
          <hr />
          <p>Help & Support for Puja Booking</p>
          <div className="flex">
            <img src="http://srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_call.858e9981.svg&w=32&q=75" alt='call' className="icon"/>
            <div>
              <span>080-711-74417</span>
              <p>You can call us from 10:30 AM to 7:30 PM</p>
            </div>
          </div>
        </div>
      </Popup>
    </nav>
  );
};
export default Header;
