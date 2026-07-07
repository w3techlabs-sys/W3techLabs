import React from "react";
import "./About.css";

const About = () => {
  // Services data
  const services = [
    {
      icon: "bi-globe2",
      title: "Custom Website Development",
      desc: "Tailor-made, high-performance websites built to reflect your brand and convert visitors into customers.",
    },
    {
      icon: "bi-megaphone-fill",
      title: "Digital Marketing Services",
      desc: "Result-driven marketing strategies across social media, ads, and content to grow your online presence.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Search Engine Optimization",
      desc: "Data-backed SEO strategies to boost rankings, drive organic traffic, and increase visibility.",
    },
    {
      icon: "bi-cart-check-fill",
      title: "E-Commerce Development",
      desc: "Scalable, secure, and conversion-optimized online stores designed to maximize sales.",
    },
    {
      icon: "bi-code-slash",
      title: "Web Application Development",
      desc: "Robust, scalable web applications built with modern MERN stack architecture.",
    },
    {
      icon: "bi-palette2",
      title: "UI/UX & Branding Design",
      desc: "Stunning, user-centric designs and branding that leave a lasting impression.",
    },
  ];

  // Statistics data
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* ================= About Content ================= */}
        <div className="row align-items-center gy-5">
          {/* ---------- Left Side: Text Content ---------- */}
          <div className="col-lg-6">
            <span className="about-badge">ABOUT W3TECHLABS</span>
            <h2 className="about-heading mt-3 mb-4">
              Empowering Businesses with Innovative Digital Solutions
            </h2>
            <p className="about-text">
              W3TechLabs is a full-service digital marketing and web
              development agency dedicated to helping brands thrive in the
              digital era. We combine creativity, technology, and strategy to
              deliver solutions that make a real impact.
            </p>
            <p className="about-text">
              From custom websites and e-commerce platforms to result-driven
              marketing campaigns, our team of experts crafts digital
              experiences that are functional, scalable, and visually
              stunning. Our mission is simple — to empower businesses with
              tools that drive measurable growth.
            </p>
            <p className="about-text">
              Clients choose W3TechLabs because we blend innovation with
              reliability. We don't just deliver projects — we build
              long-term partnerships, backed by transparent communication,
              modern technologies, and a relentless focus on results.
            </p>
          </div>

          {/* ---------- Right Side: Image with Floating Cards ---------- */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="W3TechLabs Team Working"
                className="about-main-img"
              />

              {/* Floating Card 1 */}
              <div className="floating-card card-top-left">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <div>
                  <h6>100+</h6>
                  <span>Projects Delivered</span>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="floating-card card-top-right">
                <i className="bi bi-people-fill"></i>
                <div>
                  <h6>Expert</h6>
                  <span>Team</span>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="floating-card card-bottom-left">
                <i className="bi bi-cpu-fill"></i>
                <div>
                  <h6>Modern</h6>
                  <span>Technologies</span>
                </div>
              </div>

              {/* Floating Card 4 */}
              <div className="floating-card card-bottom-right">
                <i className="bi bi-emoji-smile-fill"></i>
                <div>
                  <h6>Client</h6>
                  <span>Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Services Section ================= */}
        <div className="services-wrapper">
          <div className="text-center mb-5">
            <span className="about-badge">WHAT WE OFFER</span>
            <h2 className="about-heading mt-3">Our Core Services</h2>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="service-card">
                  <div className="service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Statistics Section ================= */}
      <div className="stats-section">
        <div className="container">
          <div className="row text-center g-4">
            {stats.map((stat, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="stat-box">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Call To Action Section ================= */}
      <div className="cta-section">
        <div className="container text-center">
          <h2 className="cta-heading">Ready to Grow Your Business?</h2>
          <p className="cta-text">
            Let's build powerful digital experiences together.
          </p>
          <button className="btn cta-btn">
            Get Free Consultation <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;