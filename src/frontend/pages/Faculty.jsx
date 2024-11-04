import React from "react";
import Slider from "react-slick"; // Import the slick slider
import { Link } from "react-router-dom"; // Import Link for breadcrumb navigation
import Footer from "../shared/footer/Footer"; // Import Footer component

const Faculty = () => {
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

  const facultyMembers = [
    {
      name: "Dr. John Doe",
      position: "Professor",
      image: "/images/professor1.jpg", // Updated path
    },
    {
      name: "Dr. Jane Smith",
      position: "Associate Professor",
      image: "/images/professor2.jpg", // Updated path
    },
    {
      name: "Dr. Michael Johnson",
      position: "Assistant Professor",
      image: "/images/professor6.jpg", // Updated path
    },
    {
      name: "Dr. Emily Davis",
      position: "Lecturer",
      image: "/images/professor4.jpg", // Updated path
    },
    {
      name: "Dr. Walter White",
      position: "Department Head",
      image: "/images/professor5.jpg", // Removed extra space & updated path
    },
    // Add more faculty members as needed
  ];

  return (
    <>
      <div className="contact-form-container">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-section" style={breadcrumbStyle}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Faculty
              </li>
            </ol>
          </nav>
        </div>

        <h2 className="faculty-title">Meet Our Faculty</h2>

        {/* Faculty Members Slider */}
        <div className="faculty-page">
          <Slider {...settings}>
            {facultyMembers.map((member, index) => (
              <div key={index} className="faculty-member mt-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-image"
                />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

const breadcrumbStyle = {
  backgroundImage:
    "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 15px",
  background: "#f4f4f4",
  marginBottom: "15px",
};

export default Faculty;
