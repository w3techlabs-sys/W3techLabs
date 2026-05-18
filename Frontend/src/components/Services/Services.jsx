/**
 * Services.jsx  —  Premium Services section
 *
 * Renders: section header → optional stats bar → 3-col card grid → bottom CTA
 * All card content comes from servicesData.js (no hardcoding here).
 * Scroll-reveal animations are driven per-card inside ServiceCard.jsx via
 * IntersectionObserver; the stagger animDelay is computed here.
 */

import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import servicesData from '../../data/servicesData';

/* Stats shown above the grid */
const STATS = [
  { value: '6+',   label: 'Core Services'     },
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction'},
  { value: '24/7', label: 'Support Coverage'   },
];

/* Arrow icon for CTA button */
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Services = () => {
  return (
    <section className="svs-section" id="services" aria-labelledby="services-heading">

      {/* ── Background decorations ── */}
      <div className="svs-grid"  aria-hidden="true" />
      <div className="svs-orb-1" aria-hidden="true" />
      <div className="svs-orb-2" aria-hidden="true" />
      <div className="svs-ring"  aria-hidden="true" />
      <div className="svs-ring svs-ring-2" aria-hidden="true" />

      <div className="container-xxl px-4">

        {/* ══════════ HEADER ══════════ */}
        <div className="svs-header">
          <div className="svs-badge">
            <span className="svs-badge-dot" aria-hidden="true" />
            What We Deliver
          </div>

          <h2 className="svs-heading" id="services-heading">
            Everything you need to<br />
            <span className="svs-heading-highlight">scale with confidence</span>
          </h2>

          <p className="svs-subtext">
            From the first line of infrastructure code to the moment your users
            say "wow" — we handle every layer of the stack so you can focus on
            what only you can build.
          </p>
        </div>

        {/* ══════════ STATS BAR ══════════ */}
        <div className="svs-stats" role="list" aria-label="Key statistics">
          {STATS.map(({ value, label }) => (
            <div className="svs-stat" key={label} role="listitem">
              <span className="svs-stat-value">{value}</span>
              <span className="svs-stat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* ══════════ CARDS GRID ══════════ */}
        <div className="svs-grid-wrap">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 svs-row">
            {servicesData.map((service, index) => (
              <div className="col" key={service.id}>
                <ServiceCard
                  image={service.image}
                  icon={service.icon}
                  tag={service.tag}
                  title={service.title}
                  description={service.description}
                  points={service.points}
                  buttonText={service.buttonText}
                  buttonHref={service.buttonHref}
                  accentColor={service.accentColor}
                  glowColor={service.glowColor}
                  /*
                   * Stagger: each card reveals 80ms after the previous.
                   * Cards in the same row fire at the same time visually
                   * because the Observer fires as they enter the viewport
                   * together — the delay makes it feel intentional.
                   */
                  animDelay={index * 80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ BOTTOM CTA ══════════ */}
        <div className="svs-cta-wrap">
          <p className="svs-cta-label">
            Not sure which service fits your needs?
          </p>
          <a href="#contact-us" className="svs-cta-btn">
            <span>Talk to an Expert</span>
            <ArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
