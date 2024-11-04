import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Programs = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 top-down">
              <div className="custom_content_ custom_content_2">
                <h1 className="p-0">Explore Our Programs</h1>
                <h6 className="my-2">Degree Programs</h6>
                <p>
                  Our institution offers a variety of degree programs designed
                  to empower students with knowledge, skills, and opportunities
                  to succeed in today’s fast-paced world. From undergraduate to
                  postgraduate studies, each program is tailored to meet the
                  evolving needs of the global workforce.
                </p>
                <p>
                  Join a community that values academic excellence, innovation,
                  and personal growth. Whether you are looking to start your
                  career or advance in your field, our programs provide the
                  foundation you need to achieve your goals.
                </p>
              </div>
            </div>
            <div className="col-md-6 m-auto">
              <div className="view_all_buton_custom">
                <button className="contact_us_custom">View all Programs</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-tabs tab_custome_padding bottom-up"
                id="my_custom_tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Undergraduate Programs
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Postgraduate Programs
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Professional Development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="executive-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#executive-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="executive-tab-pane"
                    aria-selected="false"
                  >
                    Online Learning
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="hospital-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hospital-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="hospital-tab-pane"
                    aria-selected="false"
                  >
                    Executive Programs
                  </button>
                </li>
              </ul>
              <div className="tab-content margin_custom_even" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Undergraduate Programs</h2>
                        <p>
                          The undergraduate programs offered by this institution
                          are designed to provide students with a diverse and
                          comprehensive education across multiple disciplines.
                          These programs are carefully curated to equip students
                          with the necessary skills, knowledge, and critical
                          thinking abilities to succeed in their chosen career
                          paths. Whether a student is interested in fields such
                          as engineering, business, arts, or sciences, the
                          institution ensures that its curriculum is aligned
                          with the current demands of the global job market.
                        </p>
                        <button className="contact_us_custom mt-3">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 flip-right">
                      <div className="tab_imag_custom">
                        <ScrollAnimation
                          animateIn="wobble"
                          initiallyVisible={true}
                        >
                          <img src="./images/undergraduate.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Postgraduate Programs</h2>
                        <p>
                          Our postgraduate programs are meticulously crafted for
                          students who aspire to deepen their expertise in
                          specialized fields and take their careers to the next
                          level. Aimed at professionals seeking advancement and
                          greater impact, these programs focus on a blend of
                          rigorous academic research, practical skills
                          development, and leadership training. This holistic
                          approach ensures that graduates are well-equipped to
                          navigate the complexities of their professions and
                          drive meaningful change within their industries.
                        </p>
                        <button className="contact_us_custom mt-3">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tab_imag_custom mx-2">
                        <ScrollAnimation
                          animateIn="wobble"
                          initiallyVisible={true}
                        >
                          <img src="./images/postgraduate.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Professional Development</h2>
                        <p>
                          Our professional development programs are specifically
                          designed for working professionals seeking to enhance
                          their skill sets, stay abreast of industry trends, or
                          make a significant career transition. Recognizing the
                          demands of a busy work schedule, these programs offer
                          a flexible and tailored approach to learning that
                          allows you to pursue your professional goals without
                          compromising your work-life balance. balance.
                        </p>
                        <button className="contact_us_custom mt-3">
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
                          <img src="./images/professional.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="executive-tab-pane"
                  role="tabpanel"
                  aria-labelledby="executive-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Online Learning</h2>
                        <p>
                          Our online learning programs are designed to provide
                          flexible and accessible educational opportunities for
                          students around the globe. In an increasingly
                          interconnected world, we recognize that traditional
                          classroom settings may not fit everyone’s lifestyle or
                          circumstances. Our programs are tailored to meet the
                          needs of diverse learners, allowing you to pursue your
                          academic and professional goals on your terms.
                        </p>

                        <button className="contact_us_custom mt-3">
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
                          <img src="./images/online.jpg" alt="" />
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="hospital-tab-pane"
                  role="tabpanel"
                  aria-labelledby="hospital-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="custom_content_ custom_content_2">
                        <h2>Executive Education</h2>
                        <p>
                          Our executive education programs are meticulously
                          designed for senior leaders who aim to enhance their
                          leadership skills, strategic thinking, and
                          decision-making capabilities. In today’s fast-paced
                          business environment, the ability to adapt and make
                          informed decisions is crucial for sustained success.
                          Our programs offer senior executives the tools and
                          insights they need to navigate complex challenges and
                          drive meaningful change within their organizations.
                        </p>
                        <button className="contact_us_custom mt-3">
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
                          <img src="./images/executive.jpg" alt="" />
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

export default Programs;
