import React from "react";
import "./ServicesMarquee.css";

/**
 * ServicesMarquee
 * ------------------------------------------------------------------
 * Premium, dark, infinite-scrolling services showcase for W3TechLabs.
 *
 * Structure:
 *  - Row 1: primary services, scrolling right -> left, gradient set A
 *  - Row 2: extended services, fades in after a short delay, also
 *           scrolling right -> left, gradient set B (offset speed so
 *           the two rows never feel mechanically identical)
 *
 * Both rows duplicate their content so the CSS keyframe can loop
 * seamlessly at translateX(-50%) with zero visible seam, and both
 * pause on hover.
 * ------------------------------------------------------------------
 */

// First set of services (primary offerings)
const PRIMARY_SERVICES = [
  { label: "Custom Website Development", gradient: "grad-blue" },
  { label: "Digital Marketing Services", gradient: "grad-pink" },
  { label: "Search Engine Optimization", gradient: "grad-green" },
  { label: "E-Commerce Development", gradient: "grad-orange" },
  { label: "Web Application Development", gradient: "grad-cyan" },
  { label: "UI/UX & Branding Design", gradient: "grad-purple" },
];

// Second set of services (extended capabilities) — appears after a delay
const EXTENDED_SERVICES = [
  { label: "Social Media Marketing", gradient: "grad-teal" },
  { label: "Google Ads Management", gradient: "grad-yellow" },
  { label: "Facebook Ads", gradient: "grad-red" },
  { label: "Brand Identity Design", gradient: "grad-pink" },
  { label: "WordPress Development", gradient: "grad-blue" },
  { label: "React Development", gradient: "grad-cyan" },
  { label: "Node.js Development", gradient: "grad-green" },
  { label: "MERN Stack Development", gradient: "grad-purple" },
  { label: "Mobile App Development", gradient: "grad-orange" },
  { label: "Website Maintenance", gradient: "grad-teal" },
  { label: "Performance Optimization", gradient: "grad-yellow" },
  { label: "Hosting & Deployment", gradient: "grad-red" },
  { label: "API Development", gradient: "grad-blue" },
  { label: "Business Automation", gradient: "grad-purple" },
];

/**
 * Renders one marquee track. Content is rendered twice back-to-back
 * so the track can scroll from 0% to -50% and loop with no jump.
 */
const MarqueeTrack = ({ services, direction = "row-a", ariaLabel }) => {
  const renderChip = (service, idx, copy) => (
    <li
      className={`marquee-chip ${service.gradient}`}
      key={`${copy}-${service.label}-${idx}`}
    >
      <span className="chip-dot" aria-hidden="true" />
      <span className="chip-label">{service.label}</span>
    </li>
  );

  return (
    <div className="marquee-track-wrapper" role="group" aria-label={ariaLabel}>
      <ul className={`marquee-track ${direction}`}>
        {services.map((s, i) => renderChip(s, i, "a"))}
        {/* Duplicate set — required for the seamless -50% loop */}
        {services.map((s, i) => renderChip(s, i, "b"))}
      </ul>
    </div>
  );
};

const ServicesMarquee = () => {
  return (
    <section className="services-marquee-section" aria-labelledby="services-heading">
      {/* Ambient background layers: grid + glow blur + particles */}
      <div className="marquee-bg-grid" aria-hidden="true" />
      <div className="marquee-bg-glow marquee-bg-glow-left" aria-hidden="true" />
      <div className="marquee-bg-glow marquee-bg-glow-right" aria-hidden="true" />
      <div className="marquee-bg-particles" aria-hidden="true" />

      <div className="container">
        <div className="services-heading-wrap text-center">
          <span className="eyebrow-badge">W3TECHLABS · SERVICES</span>
          <h2 id="services-heading" className="services-title">
            Our Core Services
          </h2>
          <p className="services-subtitle">
            Helping Businesses Grow Through Modern Technology &amp; Digital Innovation.
          </p>
        </div>
      </div>

      {/* Row 1 — primary services, visible immediately */}
      <MarqueeTrack
        services={PRIMARY_SERVICES}
        direction="row-a"
        ariaLabel="Primary services"
      />

      {/* Row 2 — extended services, fades in a moment after page load */}
      <div className="marquee-row-delayed">
        <MarqueeTrack
          services={EXTENDED_SERVICES}
          direction="row-b"
          ariaLabel="Extended services"
        />
      </div>

      {/* Edge fade masks so text dissolves into the background instead of clipping */}
      <div className="marquee-edge-fade marquee-edge-fade-left" aria-hidden="true" />
      <div className="marquee-edge-fade marquee-edge-fade-right" aria-hidden="true" />
    </section>
  );
};

export default ServicesMarquee;
