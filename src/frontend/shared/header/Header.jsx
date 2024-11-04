import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupForm from "../../pages/PopupForm";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const handleEnquiryClick = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg custom_nav_bg"
        style={{ height: "72px" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="logo-text">Web3Schools</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom_nav_link">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/campus" className="nav-link">
                  Campus Life
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faculty" className="nav-link">
                  Faculty
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <button className="enquirybtn" onClick={handleEnquiryClick}>
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isPopupOpen && <PopupForm closePopup={closePopup} />}
    </>
  );
};

export default Header;
