import "./AboutSection.css";
import aboutImg from "../../../assets/images/about/about-company.jpg";

import {
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const AboutSection = () => {

  const features = [
    "Custom Website Development",
    "MERN Stack Applications",
    "UI/UX Design",
    "Digital Marketing"
  ];

  return (
    <section className="about-section">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <div className="about-content">

             <span className="about-badge">
    About <strong>W3TechLabs</strong>
</span>

              <h2 className="about-title">
  Building <span>Innovative</span> Digital Solutions
  <br />
  For <span>Modern Businesses</span>
</h2>

              <p className="about-description">

                W3TechLabs is a software development and digital
                transformation company helping startups, SMEs and
                enterprises build modern websites, scalable web
                applications, and impactful digital experiences.

              </p>

              <h5 className="who-title">
                Who We Are
              </h5>

              <p className="who-description">

                Our team combines creativity, technology, and business
                strategy to deliver secure, scalable, and high-performing
                digital solutions that help clients grow confidently.

              </p>

              <div className="row">

                {features.map((item, index) => (

                  <div
                    className="col-md-6"
                    key={index}
                  >

                    <div className="feature-item">

                      <FaCheckCircle className="feature-icon" />

                      <span>{item}</span>

                    </div>

                  </div>

                ))}

              </div>

              <div className="about-buttons">

                <button className="primary-btn">

                  Our Services

                  <FaArrowRight />

                </button>

                <button className="secondary-btn">

                  Contact Us

                </button>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <div className="about-image">

              <img
                src={aboutImg}
                alt="About W3TechLabs"
              />

              <div className="experience-box">

                <h3>5+</h3>

                <span>
                  Years Experience
                </span>

              </div>

              <div className="project-box">

                <h3>100+</h3>

                <span>
                  Projects Delivered
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );

};

export default AboutSection;