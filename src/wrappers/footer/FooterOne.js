import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${backgroundColorClass ? backgroundColorClass : ""
        } ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        } ${extraFooterClass ? extraFooterClass : ""} ${spaceLeftClass ? spaceLeftClass : ""
        } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">

          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
              }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
              <Link to={process.env.PUBLIC_URL + "/about"}> <h3>О НАС</h3></Link>
              </div>
              <div className="footer-list">
                <ul>
                  {/* <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>О нас</Link>
                  </li> */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Расположение офиса
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      Контакты
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Отслеживание заказов
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
              }`}
          >
            <div
              className={`${sideMenu
                ? "footer-widget mb-30 ml-95"
                : "footer-widget mb-30 ml-50"
                }`}
            >
              <div className="footer-title">
                <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/questions"}>Часто задаваемые вопросы</Link>
                  </li>
                  {/* <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Политика конфиденциальности
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Руководство по размерам</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
              }`}
          >
            <div
              className={`${sideMenu
                ? "footer-widget mb-30 ml-145"
                : "footer-widget mb-30 ml-75"
                }`}
            >
              <div className="footer-title">
                <h3>НАШИ СОЦСЕТИ</h3>
              </div>
              <div className="footer-list">
                <ul>
                <li>
                    <a
                      href="https://wa.me/905522868989"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/istanbul_expert/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/istanbul_exp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Telegramm
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCR58sPLCgfgkZ0BDs9TKeCQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>

                  
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
              }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
              }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/ist_101.png"
              spaceBottomClass="mb-30"
            />
          </div>

        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
