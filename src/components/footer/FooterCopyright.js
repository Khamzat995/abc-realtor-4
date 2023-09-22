import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${colorClass ? colorClass : ""
        }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="картинка" src={process.env.PUBLIC_URL + footerLogo} className="footer-img" />
        </Link>
      </div>
      <p>
        © 2023{" "}
        <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          Стамбул
        </a>
        .<br /> Все права защищены
      </p>
      </div>

  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
