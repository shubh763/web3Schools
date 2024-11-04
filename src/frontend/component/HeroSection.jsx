import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const HeroSection = () => {
  return (
    <>
      <section className="margin_custom_even">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bottom-up">
              <div className="custom_content_">
                <h2>
                  Welcome to <br /> Our Graduate School
                </h2>
                <p>
                  At this organisation, we are committed to providing an
                  enriching educational experience that prepares students for
                  success in a dynamic world. Our programs are designed to
                  foster critical thinking, leadership, and innovation,
                  equipping graduates to excel in their chosen fields.
                </p>
                <p>
                  Join us in a journey of discovery, learning, and growth.
                  Whether in the classroom, through extracurricular activities,
                  or within our vibrant community, we aim to shape future
                  leaders with a passion for excellence and a sense of
                  responsibility towards society.
                </p>
                <div className="my-2">
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i>Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-auto flip-right">
              <div className="side_v_banner">
                <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
                  <img src="./images/sidevideo.png" alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
