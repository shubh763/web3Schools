import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      organization_name: "",
      mobile_no: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required!"),
      mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Phone number is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      message: Yup.string().required("Message is required!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://pixelprotechnologies.com/testapi/vi/feedback",
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        alert("Query sent successfully. We will reach you shortly.");
        console.log(response);
        resetForm();
      } catch (error) {
        console.error("Error sending description", error);
        alert("Failed to send description");
      }
    },
  });

  return (
    <>
      <div className="contact-form container mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}
          </div>

          <div className="form-group mt-4 mb-4">
            <label>Organization</label>
            <input
              type="text"
              id="organization_name"
              name="organization_name"
              className="form-control"
              value={formik.values.organization_name}
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group mt-4 mb-4">
            <label>Phone</label>
            <input
              type="tel"
              id="mobile_no"
              name="mobile_no"
              className="form-control"
              value={formik.values.mobile_no}
              onChange={formik.handleChange}
            />
            {formik.errors.mobile_no && formik.touched.mobile_no && (
              <p style={{ color: "red" }}>{formik.errors.mobile_no}</p>
            )}
          </div>

          <div className="form-group mt-4 mb-4">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
          </div>

          <div className="form-group mt-4 mb-4">
            <label>Message</label>
            <input
              type="text"
              id="message"
              name="message"
              className="form-control"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message && (
              <p style={{ color: "red" }}>{formik.errors.message}</p>
            )}
          </div>

          <div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
