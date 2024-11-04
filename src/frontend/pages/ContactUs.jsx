import React from "react";
import { Link } from "react-router-dom";  // Import Link
import Footer from "../shared/footer/Footer";
import ContactForm from "../component/ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        {/* Breadcrumb Section with Background Image */}
        <div className="breadcrumb-section" style={breadcrumbStyle}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>  {/* Link to home */}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

// Breadcrumb section styling
const breadcrumbStyle = {
  backgroundImage:
    "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 15px",
  background: "#f4f4f4",
  marginBottom: "15px",
};

export default ContactUs;
