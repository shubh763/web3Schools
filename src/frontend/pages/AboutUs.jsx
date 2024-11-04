import React from "react";
import { Link } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const AboutUs = () => {
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
              About Us
            </li>
          </ol>
        </nav>
      </div>

      {/* About Us Section */}
      <h1 className="section-title">About Us</h1>
      <br />
      <p>
        Welcome to our school! We are dedicated to providing a nurturing and
        inclusive environment where students can explore their potential and
        thrive academically, socially, and emotionally. Our experienced faculty
        ensures that each student receives personalized attention, and our
        state-of-the-art facilities offer the best in educational resources.
      </p>
      <p>
        With a strong focus on holistic development, we offer a range of
        programs that go beyond academics to include arts, sports, and
        extracurricular activities. Our goal is to foster a community of
        lifelong learners who are prepared to take on the challenges of
        tomorrow.
      </p>
      <p>
        We welcome you to visit our campus and experience the spirit of our
        institution!
      </p>

      {/* Meet Our Team Section */}
      <div className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <br />
        <div className="team-cards">
          {/* Team Member 1 */}
          <div className="team-card">
            <img
              src="https://remotemode.com/wp-content/uploads/2020/08/java-developer-150x150.jpg"
              alt="Team Member"
              className="team-image"
            />
            <h3 className="team-name">John Doe</h3>
            <p className="team-role">Founder & CEO</p>
            <p className="team-bio">
              John has over 10 years of experience in blockchain technology and
              education, leading the vision of Web3Schools.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="team-card">
            <img
              src="https://engineering.salesforce.com/wp-content/uploads/2023/02/Developer-Productivity-Developer-Velocity-Salesforce-Tableau-e1676993880608.jpg?w=150&h=150&crop=1"
              alt="Team Member"
              className="team-image"
            />
            <h3 className="team-name">Jane Smith</h3>
            <p className="team-role">Lead Developer</p>
            <p className="team-bio">
              Jane is a blockchain developer with extensive knowledge in smart
              contracts and decentralized applications.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Join Us Today!</h2>
        <p className="mt-2">
          Become part of our growing community and start your Web3 learning
          journey now.
        </p>
        <Link to="/contactus">
          <button className="cta-button mt-3">Contact Us</button>
        </Link>
        <Link to="/">
          <button className="cta-button mt-3">Get Started</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

const breadcrumbStyle = {
  backgroundImage:
    "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')", // Replace with a beautiful image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 15px",
  background: "#f4f4f4",
  marginBottom: "15px"
};

export default AboutUs;
