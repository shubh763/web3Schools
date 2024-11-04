import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Courses = () => {
  return (
    <>
      <section className="margin_custom_even mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 flip-right">
              <div className="custom_content_">
                <h1>School Online</h1>
                <p>
                  Welcome to our online learning platform, where education meets
                  flexibility. Our courses are designed to cater to diverse
                  learning styles and schedules, ensuring that students can
                  learn at their own pace. We provide high-quality content
                  developed by industry experts, covering a wide range of
                  subjects, from foundational topics to advanced skills.
                </p>
                <button className="contact_us_custom mt-4">
                  Discover our Online courses
                </button>
              </div>
            </div>
            <div className="col-md-7 m-auto flip-left">
              <div className="side_v_banner_wild">
                <ScrollAnimation
                  animateIn="bounce"
                  initiallyVisible={true}
                  animateOnce={true}
                >
                  <img src="./images/wide banner.jpg" alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
