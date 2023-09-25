import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPosts = () => {
  return (
    <Fragment>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-seven"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/musk-erdogan.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>23 сентября, 2023</li>
                <li>
                  14 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-seven"}>
              Эрдоган и Маск откроют завод Tesla в Турции?
              </Link>
            </h4>
            <p>
            17 сентября президент Турции Реджеп Тайип Эрдоган встретился в Нью-Йорке с бизнесменом ...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-seven"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-42.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>7 июля, 2023</li>
                <li>
                  42 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                СТИЛЬНЫЙ ИНТЕРЬЕР: ПРОСТОТА И АРИСТОКРАТИЗМ
              </Link>
            </h4>
            <p>
              Интерьер в стиле гранж – одно из оригинальных направлений дизайна, которое совмещает в себе сложно сочетаемые ...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-45.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>9 июля, 2023</li>
                <li>
                  122 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                МЕДИЦИНА В ТУРЦИИ ДЛЯ ИНОСТРАНЦЕВ
              </Link>
            </h4>
            <p>
              Здравоохранение в Турции - еще одна причина выбрать эту страну в качестве своего второго дома. В соответствии с ...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-43.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>4 июля, 2023</li>
                <li>
                  149 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                БЕРЕЖНО К ПРИРОДЕ: ЭКОЛОГИЧНЫЙ ПОДХОД К ОФОРМЛЕНИЮ ИНТЕРЬЕРА
              </Link>
            </h4>
            <p>
              Экологический дизайн – это вид дизайна, где на первый план выходят гармония между человеком и природой, а так...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-44.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>21 июня, 2023</li>
                <li>
                  214 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                10 ПОПУЛЯРНЫХ МЕСТ ДЛЯ ЛУЧШЕГО ОТДЫХА В ТУРЦИИ
              </Link>
            </h4>
            <p>
              Курорты Турции стали символом качественного отдыха. Путешествие в Турцию дает возможность посетить памятники ...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-46.webp"}
                alt="картинка"
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>12 июля, 2023</li>
                <li>
                  14 <i className="fa fa-comments-o" />
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                ОБРАЗОВАНИЕ В ТУРЦИИ. В ЧЕМ ЕЕ ОСОБЕННОСТИ И ОТЛИЧИЯ?
              </Link>
            </h4>
            <p>
              Во многих странах первое сентября не ознаменует начало учебного года. Однако в Турции дата начала обучения ...
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default BlogPosts;
