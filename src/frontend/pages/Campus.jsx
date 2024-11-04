import React from "react";
import { Link } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Slider from "react-slick"; // Ensure you have the right import for the slider

const Campus = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices with screen width <= 768px
        settings: {
          slidesToShow: 1, // Show only one slide
        },
      },
      {
        breakpoint: 1000, // For devices with screen width <= 1000px
        settings: {
          slidesToShow: 2, // Show two slides on medium screens
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        {/* Breadcrumb Section with Background Image */}
        <div className="breadcrumb-section" style={breadcrumbStyle}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Campus
              </li>
            </ol>
          </nav>
        </div>

        {/* Campus Life Section */}
        <h1 className="section-title">Campus Life</h1>
        <br />
        <p>
          Our campus is more than just a place to study; it is a vibrant and
          dynamic environment where students are encouraged to pursue academic
          excellence while also engaging in activities that promote personal
          growth, teamwork, leadership, and community spirit. Whether you are a
          first-year student or nearing graduation, the opportunities for
          involvement and development are abundant, making our campus an ideal
          place for a holistic learning experience.
        </p>
        <p>
          The academic facilities on our campus are designed to foster both
          independent and collaborative learning. Our state-of-the-art libraries
          provide access to vast resources, including books, research papers,
          and digital archives that cater to all fields of study. Along with
          modern classrooms equipped with the latest technology, students can
          engage with faculty and peers in ways that enhance the learning
          process. Specialized labs and studios give students hands-on
          experiences in their chosen disciplines, from engineering to the arts.
        </p>

        {/* Campus Highlights Section */}
        <div className="highlight-section">
          <h2 className="section-title">Campus Highlights</h2>
          <div className="highlight-cards row observe-element bottom-up mt-4">
            <Slider {...settings}>
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/campus3.jpg" alt="Learning" />
                  <h6>
                    <small>Resources</small>
                  </h6>
                  <h4>Cutting-Edge Learning Resources</h4>
                  <p className="my-2">
                    Our campus is equipped with state-of-the-art learning
                    facilities that provide students with the tools they need to
                    succeed. From fully digitized libraries to interactive
                    learning environments, we ensure that every student has
                    access to the latest educational resources.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i> Learn more
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/Campus2.jpg" alt="Time Management" />
                  <h6>
                    <small>Events</small>
                  </h6>
                  <h4>Diverse Cultural Events</h4>
                  <p className="my-2">
                    We celebrate diversity and promote a rich cultural
                    experience on campus. Throughout the academic year, students
                    participate in a wide range of cultural events, from music
                    and dance performances to international food festivals and
                    art exhibitions.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i> Learn more
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="blog_card blog_card_border_right">
                  <img src="./images/campus1.jpg" alt="Challenges" />
                  <h6>
                    <small>Facilities</small>
                  </h6>
                  <h4>Expansive Sports Facilities</h4>
                  <p className="my-2">
                    For students passionate about sports and physical fitness,
                    our campus offers a wide variety of sports facilities. From
                    professional-grade football fields and tennis courts to
                    indoor gymnasiums and swimming pools, students can pursue
                    their athletic interests.
                  </p>
                  <a href="#">
                    <i className="bi bi-box-arrow-up-right"></i> Learn more
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Student Activities Section */}
        <div className="activities-section mt-5">
          <h2 className="section-title">Student Activities</h2>
          <p className="mt-3">
            At our campus, student activities play a vital role in enhancing the
            overall educational experience. They provide opportunities for
            personal development, social interaction, and leadership
            skill-building, ensuring that students make the most of their time
            here. Whether through clubs, organizations, or events, there’s
            something for everyone to engage with, explore passions, and connect
            with like-minded individuals.
          </p>
          <p>
            One of the most exciting aspects of campus life is the variety of
            student-run organizations available. These clubs cater to diverse
            interests, allowing students to connect with others who share
            similar passions. Academic clubs focused on fields like science,
            business, and literature provide platforms for students to delve
            deeper into their studies through workshops, guest lectures, and
            networking opportunities. Cultural clubs celebrate the rich
            diversity of our student body, organizing events that showcase
            different traditions and promote inclusivity. These clubs host
            cultural nights, food festivals, and dance performances that create
            a sense of belonging and appreciation for different heritages.
          </p>
        </div>

        {/* Student Testimonials Section */}
        <div className="testimonial-section">
          <h2 className="section-title">What Our Students Say</h2>
          <Slider {...setting}>
            <div className="testimonial-card mt-4">
              <img
                src="images/student1.jpg"
                alt="Student"
                className="testimonial-image"
                style={{ height: "100px", width: "100px" }}
              />
              <h3 className="testimonial-name">Sarah Johnson</h3>
              <p className="testimonial-text">
                "The campus life here has been incredible! I've grown both
                academically and personally, thanks to the amazing support from
                faculty and the opportunities to engage in a wide variety of
                activities."
              </p>
            </div>

            <div className="testimonial-card mt-4">
              <img
                src="images/students.jpeg"
                style={{ height: "100px", width: "100px" }}
                alt="Student"
                className="testimonial-image"
              />
              <h3 className="testimonial-name">Michael Smith</h3>
              <p className="testimonial-text">
                "Being a part of this campus has opened so many doors for me.
                I've had the chance to engage with amazing peers and faculty
                that have enriched my learning experience."
              </p>
            </div>

            <div className="testimonial-card mt-4">
              <img
                src="images/student2.jpeg"
                style={{ height: "100px", width: "100px" }}
                alt="Student"
                className="testimonial-image"
              />
              <h3 className="testimonial-name">Emily Davis</h3>
              <p className="testimonial-text">
                "The environment here encourages both academic growth and
                extracurricular involvement. It's been a well-rounded
                experience."
              </p>
            </div>
          </Slider>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h2>Join Our Campus Life!</h2>
          <p className="mt-2">
            Become part of our vibrant community and experience the best of
            campus life.
          </p>
          <Link to="/contactus">
            <button className="cta-button mt-3">Contact Us</button>
          </Link>
          <Link to="/">
            <button className="cta-button mt-3">Get Started</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Breadcrumb style
const breadcrumbStyle = {
  backgroundImage:
    "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 15px",
  background: "#f4f4f4",
  marginBottom: "15px",
};

export default Campus;
