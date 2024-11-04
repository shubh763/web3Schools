import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Organization = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 observe-element flip-right">
              <div className="custom_content_ custom_content_2">
                <h2 className="p-0">School Graduate School</h2>
                <h6 className="my-2">Soultions for organizations</h6>
                <p className="my-1">
                  Our Graduate School is dedicated to empowering individuals and
                  organizations through tailored educational solutions. We
                  provide high-quality programs that are designed to enhance
                  professional skills and drive impactful results. Whether you
                  are a business leader seeking to upskill your team or an
                  individual looking to advance your career, our offerings cater
                  to diverse needs in various fields.
                </p>
              </div>
            </div>
            <div className="col-md-6 m-auto">
              <div className="view_all_buton_custom">
                <button className="contact_us_custom">
                  View all soultions
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-tabs tab_custome_padding tab_custom_width_into_three top-down"
                id="my_custom_tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="edu-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#edu-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="edu-tab-pane"
                    aria-selected="true"
                  >
                    Educational Programs
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="hosp-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hosp-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="hosp-tab-pane"
                    aria-selected="false"
                  >
                    Healthcare Initiatives
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="semi-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#semi-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="semi-tab-pane"
                    aria-selected="false"
                  >
                    Seminars and Workshops
                  </button>
                </li>
              </ul>
              <div className="tab-content margin_custom_even" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="edu-tab-pane"
                  role="tabpanel"
                  aria-labelledby="edu-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Comprehensive Educational Programs</h2>
                        <p>
                          Our educational programs are designed to equip
                          learners with the necessary skills to thrive in their
                          careers. We emphasize a practical approach, ensuring
                          that students can apply their knowledge in real-world
                          situations. Join us to explore various disciplines and
                          boost your expertise.
                        </p>
                        <button className="contact_us_custom mt-4">
                          Learn more
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab_imag_custom">
                        <ScrollAnimation
                          animateIn="wobble"
                          initiallyVisible={true}
                        >
                          <img src="./images/edprogram.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="hosp-tab-pane"
                  role="tabpanel"
                  aria-labelledby="hosp-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Innovative Healthcare Initiatives</h2>
                        <p>
                          Our healthcare initiatives focus on training
                          professionals in the latest practices and
                          technologies. We provide courses that enhance skills
                          in healthcare delivery, patient management, and more.
                          Empower your team to provide outstanding care through
                          our specialized training.
                        </p>
                        <button className="contact_us_custom mt-4">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab_imag_custom">
                        <ScrollAnimation
                          animateIn="wobble"
                          initiallyVisible={true}
                        >
                          <img src="./images/healthcare.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="semi-tab-pane"
                  role="tabpanel"
                  aria-labelledby="semi-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Engaging Seminars and Workshops</h2>
                        <p>
                          Participate in our engaging seminars and workshops
                          designed to foster networking and collaboration. Our
                          events feature industry experts who share insights and
                          best practices. Enhance your professional journey by
                          connecting with peers and thought leaders.
                        </p>
                        <button className="contact_us_custom mt-4">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab_imag_custom">
                        <ScrollAnimation
                          animateIn="wobble"
                          initiallyVisible={true}
                        >
                          <img src="./images/seminars.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organization;
