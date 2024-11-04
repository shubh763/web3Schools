import React from "react";
import Slider from "react-slick";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="margin_custom_even mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog_heading_contetn">
                <h6>From our Blog</h6>
                <h5>Insights</h5>
              </div>
            </div>
          </div>
          <div className="row observe-element bottom-up">
            <Slider {...settings}>
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/learning.jpg" alt="" />
                  <h6>
                    <small>Student Resources</small>
                  </h6>
                  <h4>Navigate World of Online Learning</h4>
                  <p className="my-2">
                    Online education offers flexibility and opportunities for
                    learners of all ages. Discover strategies to make the most
                    of your online classes and succeed in your academic journey.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i>Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/time.jpg" alt="" />
                  <h6>
                    <small>Tips for Success</small>
                  </h6>
                  <h4>Maximizing Your Study Time</h4>
                  <p className="my-2">
                    Effective time management can enhance your learning
                    experience. Explore practical tips to help you organize your
                    study schedule and improve your focus.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i>Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/challenges.jpg" alt="" />
                  <h6>
                    <small>Inspirational Stories</small>
                  </h6>
                  <h4> Overcoming Challenges</h4>
                  <p className="my-2">
                    Read about the inspiring journeys of students who have
                    overcome obstacles in their education. Their stories
                    highlight resilience and the power of determination.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i>Learn more
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
