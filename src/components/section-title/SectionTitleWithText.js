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
            Наша компания с 2009 года успешно занимается экспортом из Турции мебели для дома, офиса и
            дачи. Мы работаем напрямую с ведущими турецкими производителями из более 50
            мебельных фабрик,
            пользуюшихся заслуженной любовью покупателей.
            В нашем ассортименте: гостиные, спальни, кухни, мебель для детских комнат, стенки, шкафы купе, прихожие, модульная мебель, кровати и многое другое.

            Мы рады предоставить качественную продукцию и сервис каждому покупателю, так как,
            для нас очень важен Ваш положительный отзыв, как и отзывы тысяч довольных
            клиентов, среди которых крупные сетевые компании и предприятия.

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
