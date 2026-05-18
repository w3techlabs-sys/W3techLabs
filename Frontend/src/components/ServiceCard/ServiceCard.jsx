/**
 * ServiceCard.jsx
 *
 * Fully reusable card component.
 * Props:
 *   image       {string}   — Card hero image URL
 *   icon        {string}   — Emoji / icon character for floating badge
 *   tag         {string}   — Small category label shown on image
 *   title       {string}   — Card heading
 *   description {string}   — Short body copy
 *   points      {string[]} — Feature bullet list (max 4 recommended)
 *   buttonText  {string}   — CTA button label
 *   buttonHref  {string}   — CTA anchor/link target
 *   accentColor {string}   — Hex accent colour (e.g. "#6366f1")
 *   glowColor   {string}   — rgba() for glow overlay
 *   animDelay   {number}   — Stagger delay in ms for scroll animation
 */

import { useEffect, useRef } from 'react';
import './ServiceCard.css';

/* Converts "#rrggbb" or "rgb(...)" → "r,g,b" for CSS var */
const hexToRgb = (hex) => {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >>  8) & 255;
  const b =  bigint        & 255;
  return `${r},${g},${b}`;
};

/* SVG check icon */
const CheckIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

/* Arrow icon */
const ArrowIcon = () => (
  <svg
    className="sc-btn-arrow"
    width="16" height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceCard = ({
  image,
  icon       = '⚡',
  tag        = 'Service',
  title      = 'Service Title',
  description = '',
  points     = [],
  buttonText = 'Learn More',
  buttonHref = '#',
  accentColor = '#6366f1',
  glowColor   = 'rgba(99,102,241,0.35)',
  animDelay   = 0,
}) => {
  const cardRef = useRef(null);

  /* ── Intersection Observer: fade-up reveal ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay per card for stagger effect
          setTimeout(() => card.classList.add('sc-visible'), animDelay);
          observer.unobserve(card);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [animDelay]);

  /* CSS custom properties scoped to this card */
  const cssVars = {
    '--sc-accent':     accentColor,
    '--sc-accent-rgb': hexToRgb(accentColor),
    '--sc-glow':       glowColor,
  };

  return (
    <article
      ref={cardRef}
      className="sc-card"
      style={cssVars}
    >
      {/* ── Image area ── */}
      <div className="sc-image-wrap">
        <img
          src={image}
          alt={title}
          className="sc-image"
          loading="lazy"
          draggable={false}
        />
        <div className="sc-image-overlay" />
        <span className="sc-tag">{tag}</span>

        {/* Floating icon sits on bottom-right of image */}
        <div className="sc-icon-wrap">
          <div className="sc-icon" role="img" aria-label={`${title} icon`}>
            {icon}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="sc-body">
        <h3 className="sc-title">{title}</h3>
        <p  className="sc-desc">{description}</p>

        <div className="sc-divider" />

        {/* Feature points */}
        {points.length > 0 && (
          <ul className="sc-features" aria-label="Key features">
            {points.map((point, i) => (
              <li key={i} className="sc-feature">
                <span className="sc-check"><CheckIcon /></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="sc-spacer" />

        {/* CTA button */}
        <a href={buttonHref} className="sc-btn">
          <span>{buttonText}</span>
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
