import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h1>Добро пожаловать в ISTANBUL EXPERT!</h1>
          <p>
          Мы подберем для Вас уютные апартаменты для постоянного 
          проживания, квартиру для инвестирования с целью сдачи в 
          аренду, шикарную виллу на морском побережье, коммерческий 
          объект с гарантированным пассивным заработком или для 
          ведения собственного бизнеса и другие интересующие 
          Вас объекты. Мы найдем для Вас лучшие предложения, 
          отвечающие Вашим требованиям.

            {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
