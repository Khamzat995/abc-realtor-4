import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostSeven = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt="картинка"
            src={process.env.PUBLIC_URL + "/assets/img/blog/musk-erdogan.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>23 сентября, 2023</li>
              <li>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                225 <i className="fa fa-comments-o" />
                {/*  </Link> */}
              </li>
            </ul>
          </div>
          <h3>Эрдоган и Маск откроют завод Tesla в Турции?</h3>
          <p>
          17 сентября президент Турции Реджеп Тайип Эрдоган встретился в 
          Нью-Йорке с бизнесменом и владельцем компании Tesla Илоном 
          Маском. Об этом сообщает управление по связям с общественностью 
          администрации президента Турции в X (ранее Twitter).
{" "}
          </p>
          <blockquote>
          Во время встречи Эрдоган рассказал Маску о достижениях Турции в области технологий и призвал его построить седьмой завод Tesla в республике. 
          </blockquote>
          <p>
          Он также заявил о возможности сотрудничества Турции со 
          SpaceX в рамках реализации космической программы.
          Кроме того, турецкий лидер пригласил Маска на фестиваль авиации, 
          космоса и технологий Teknofest, который пройдет в Измире. 
          Сейчас электрокары Tesla производятся на шести заводах, четыре из 
          которых находятся в США, еще два – в Китае и Германии. Первый 
          завод Tesla был открыт в 2010 г. в Калифорнии. Затем производство 
          запустили на предприятиях в Неваде и Нью-Йорке. В 2019 г. завод 
          Tesla заработал в Шанхае, а в 2022 г. – Техасе и Бранденбурге. 
          Число работников компании превышает 70 000.
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              {/* <a href="#"> */}
                <img
                  alt="картинка"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                  }
                />
             {/*  </a> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
           {/*  <a href="#"> */}
                <img
                  alt="картинка"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                  }
                />
             {/*  </a> */}
            </div>
          </div>
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <p className="blockquote">
            Цитата Маска: турецкие поставщики уже работают с Tesla и Турция 
            один из наиболее предпочтительных кандидатов для строительства следующего завода компании.
            </p>
            <p>
            Эрдоган заявил во время встречи, что Турция открыта для 
            сотрудничества в области искусственного интеллекта и 
            проектов Starlink. По словам Эрдогана, компания SpaceX 
            желает работать с турецкими властями, чтобы получить 
            лицензию на предоставление спутниковых услуг Starlink в 
            Турции.
            </p>
          </div>
        </div>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Стиль ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Интересы ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Люди
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>Поделиться :</span>
          <div className="share-social">
            <ul>

              <li>
                <a className="whatsapp" href="//twitter.com">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a className="telegram" href="//facebook.com">
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostSeven;
