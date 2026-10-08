// src/components/footer/FooterColumn.jsx

import "./FooterColumn.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h5 className="footer-column-title">{title}</h5>

      <ul className="footer-links">
        {links.map((item) => {
          const isInternalRoute =
            item.path.startsWith("/") &&
            !item.path.startsWith("//");

          return (
            <li key={item.name}>
              {isInternalRoute ? (
                <Link to={item.path}>
                  <FaArrowRight className="footer-link-arrow" />
                  <span>{item.name}</span>
                </Link>
              ) : (
                <a href={item.path}>
                  <FaArrowRight className="footer-link-arrow" />
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterColumn;