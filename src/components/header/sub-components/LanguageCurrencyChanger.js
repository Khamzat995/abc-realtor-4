import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "tr"
              ? "Turkish"
              : currentLanguageCode === "ru"
                ? "Russian"
                : currentLanguageCode === "fn"
                  ? "French"
                  : currentLanguageCode === "de"
                    ? "Germany"
                    : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="tr" onClick={e => changeLanguageTrigger(e)}>
                Turkish
              </button>
            </li>
            <li>
              <button value="ru" onClick={e => changeLanguageTrigger(e)}>
                Russian
              </button>
            </li>
            <li>
              <button value="fn" onClick={e => changeLanguageTrigger(e)}>
                French
              </button>
            </li>
            <li>
              <button value="de" onClick={e => changeLanguageTrigger(e)}>
                Germany
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency use-style">
        <span>
          {currency.currencyName} <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="TRY" onClick={e => setCurrencyTrigger(e)}>
                TRY
              </button>
            </li>
            <li>
              <button value="RUB" onClick={e => setCurrencyTrigger(e)}>
                RUB
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency">
        <p><a href=" tel:+905522868989"> Позвонить сейчас: <span> +90 552 286 89 89</span></a></p>
      </div>
    </div >
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
