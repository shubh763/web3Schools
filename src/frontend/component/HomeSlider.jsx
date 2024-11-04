import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="main_banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contain mt-4" id="about_us">
              <Slider {...settings} className="custom_crosule_slider_ flip-left">
                <div className="item">
                  <div className="carousel-item custome_crosule_cs active">
                    <h6>About us</h6>
                    <h4>Our Missions</h4>
                    <p>At our Organisation, we strive to create an inclusive learning environment where students are encouraged to explore their talents and pursue excellence. Our mission is to cultivate curious, confident, and well-rounded individuals ready to make an impact on the world.</p>
                    <button className="contact_us_custom">Learn More</button>
                  </div>
                </div>
                <div className="item">
                  <div className="carousel-item custome_crosule_cs active">
                    <h6>Academic Excellence</h6>
                    <h4>Shaping the Future</h4>
                    <p>We believe that academic excellence is achieved through innovative teaching, a supportive learning environment, and the dedication of our experienced faculty. At SchoolName, we prepare our students to excel in their academic pursuits and beyond.</p>
                    <button className="contact_us_custom">Explore Programs</button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
