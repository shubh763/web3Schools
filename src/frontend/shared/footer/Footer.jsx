import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="footer_link">
                <ul>
                  <Link to="/">
                    <li>
                      <a href="#" className="text-slide-in">
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/aboutus">
                    <li>
                      <a href="#" className="text-slide-in">
                        About us
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a href="#" className="text-slide-in">
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slide-in">
                      Research
                    </a>
                  </li>
                  <Link to="/insights">
                    <li>
                      <a href="#" className="text-slide-in">
                        Insights
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="footer_link">
                <ul>
                  <li>
                    <a href="#" className="text-slide-in">
                      Programs & Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slide-in">
                      Online Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slide-in">
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slide-in">
                      Events
                    </a>
                  </li>
                  <Link to="/contactus">
                    <li>
                      <a href="#" className="text-slide-in">
                        Contact Us
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer_adress">
                <p>
                  School of Excellence, 123 Education Lane, Knowledge City,
                  Delhi, 110001
                </p>
                <span>Follow Us</span>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://linkedin.com/in/shubh-kumar-09aa40236/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/@ShubhKumar-y6l"
                  target="_blank"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/me.developer.hu/"
                  target="_blank"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_footer_light">
          <div className="container">
            <div className="footer_flex">
              <div className="quick_links">
                <a href="#" className="text-slide-in">
                  Accreditations & Memberships
                </a>
                <a href="#" className="text-slide-in">
                  Privacy Policy
                </a>
                <a href="#" className="text-slide-in">
                  Legal Terms
                </a>
              </div>
              <div className="copyright_content">
                @ 2024 School All right reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
