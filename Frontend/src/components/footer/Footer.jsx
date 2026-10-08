// src/components/footer/Footer.jsx

import "./Footer.css";
import FooterColumn from "./FooterColumn";
import logo from "../../assets/W3techlabsFooterlogo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "About Us", path: "#about" },
    { name: "Our Clients", path: "#clients" },
    { name: "Contact Us", path: "#contact" },
  ];

  const exploreLinks = [
    { name: "Careers & Internships", path: "/jobs" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <footer className="footer-section">
      {/* CTA Banner */}
      <div className="container">
        <div className="footer-banner">
          <div className="footer-banner-glow" />

          <div className="footer-banner-content">
            <span className="footer-eyebrow">
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2>
              Have an Idea?
              <br />
              <span>Let's Make It Happen.</span>
            </h2>

            <p>
              From innovative websites to powerful digital solutions,
              W3TechLabs is ready to help your business grow.
            </p>
          </div>

          <a href="#contact" className="footer-cta-button">
            Let's Work Together
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container footer-main">
        <div className="row gy-5">
          {/* Company Information */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-company">
              <a href="/" className="footer-logo-link" aria-label="W3TechLabs Home">
                <img
                  src={logo}
                  alt="W3TechLabs"
                  className="footer-logo"
                />
              </a>

              <p className="footer-company-description">
                Empowering businesses with innovative digital solutions,
                modern web technologies, and practical IT training to
                turn ideas into meaningful results.
              </p>

              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/w3techlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="W3TechLabs on Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/w3techlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="W3TechLabs on Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/w3techlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="W3TechLabs on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://twitter.com/w3techlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="W3TechLabs on Twitter"
                >
                  <FaTwitter />
                </a>
              </div>

              <div className="footer-company-tag">
                <span className="footer-status-dot" />
                Technology • Innovation • Growth
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <FooterColumn
              title="Quick Links"
              links={quickLinks}
            />
          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6 col-6">
            <FooterColumn
              title="Explore"
              links={exploreLinks}
            />
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-contact">
              <h5 className="footer-heading">Contact Us</h5>

              <p className="footer-contact-intro">
                Have a project in mind or want to visit our office?
                We'd love to hear from you.
              </p>

              {/* Office Address */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="footer-contact-content">
                  <span>Our Office</span>
                  <p>
                    Malikabad Plaza 2nd Floor #S-98 Office W3techlabs 6th Road ,
                    <br />
                    Rawalpindi Pakistan
                  </p>
                  <a
                    className="footer-map-link"
                    href="https://www.google.com/maps/dir/Malikabad+Shopping+Mall,+6th+Road+Chowk,+Murree+Rd,+Block+D+Satellite+Town,+Rawalpindi,+Pakistan/Malikabad+Shopping+Mall,+6th+Road+Chowk,+Murree+Rd,+Block+D+Satellite+Town,+Rawalpindi,+Pakistan/@33.648253,73.0670167,15z/data=!3m1!5s0x38dfde06df682eb3:0x17a97efdcb5a3c3a!4m13!4m12!1m5!1m1!1s0x14e3d7c028cd49d9:0x26940945443d7b5f!2m2!1d73.0757894!2d33.6402985!1m5!1m1!1s0x14e3d7c028cd49d9:0x26940945443d7b5f!2m2!1d73.0757894!2d33.6402985?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find us on the map <FaArrowRight />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaEnvelope />
                </div>

                <div className="footer-contact-content">
                  <span>Email Address</span>
                  <a href="mailto:w3techlabs@gmail.com">
                    w3techlabs@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhoneAlt />
                </div>

                <div className="footer-contact-content">
                  <span>Phone Number</span>
                  <a href="tel:+923405940628">
                    +92 340 5940 628
                  </a>
                </div>
              </div>

              {/* Business Hours - optional */}
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaClock />
                </div>

                <div className="footer-contact-content">
                  <span>Business Hours</span>
                  <p>Monday – Friday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()}{" "}
            <span>W3TechLabs</span>. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-bottom-divider">|</span>
            <a href="/terms">Terms & Conditions</a>
          </div>

          <a href="#top" className="footer-back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;