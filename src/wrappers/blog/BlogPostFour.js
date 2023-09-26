import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostFour = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt="картинка"
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-43.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>4 июля, 2023</li>
              <li>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                149 <i className="fa fa-comments-o" />
                {/*  </Link> */}
              </li>
            </ul>
          </div>
          <h3>БЕРЕЖНО К ПРИРОДЕ: ЭКОЛОГИЧНЫЙ ПОДХОД К ОФОРМЛЕНИЮ ИНТЕРЬЕРА</h3>
          <p>
            Экологический дизайн – это вид дизайна, где на первый план выходят гармония
            между человеком и природой, а также сохранение ресурсов и богатств нашей
            планеты. В этой статье поговорим про строительство и интерьер жилых домов
            и квартир,  экологический дизайн мегаполисов, офисов и предметов быта,
            которыми мы пользуемся каждый день. Экоремонт может быть несколько более
            затратным, потому что помимо покупки эко материалов, вам придется найти
            мастеров, которые умеют с ними работать, но с учетом того, насколько
            физически и визуально приятнее находиться в таких интерьерах, результат
            скорее всего оправдает все усилия.{" "}
          </p>
          <blockquote>
            Экологичный дом
          </blockquote>
          <p>
            Такое жилище – новый тренд для нашей страны, хотя все новое, как известно,
            это хорошо забытое старое. При словах “экодом” у многих представляется деревянная
            избушка в лесу, но, к счастью, это уже давно не так.Технологии не стоят на месте
            и экологические дома мира радуют владельцев всеми современными удобствами. Смысл в том,
            чтобы жить в единении с окружающей природой, не теряя при этом комфорт.
          </p>
          <blockquote>
            Экологически чистые материалы для отделки и декора
          </blockquote>
          <p>
            Дома мы проводим много времени, поэтому все чаще архитекторы и дизайнеры отдают
            предпочтение натуральным отделочным материалам:

            Гипсовые панели. Могут быть гладкими или принимать причудливые формы в зависимости
            от вкуса хозяина. Несложный монтаж, огнестойкость, прочность и простота в уборке.
            Единственный минус – панели из гипса боятся сырости.</p>

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
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <p className="blockquote">
              Экологичные средства для уборки и стирки
            </p>
            <p>
              С бытовой химией мы контактируем практически каждый день и важно
              выбирать не только эффективные, но и безопасными для здоровья и природы
              средства. Прежде всего следует избегать фталатов, этиленгликоля, фосфатов,
              аммиака, ПАВ и аммиака. Старайтесь уделять внимание сертификации и не
              ведитесь на маркетинговые ходы и нередко обманчивую маркировку на упаковке:
              «натуральный», «био» или «эко». Не превышайте дозировки, эффективность от
              этого не повышается. Экологичнее покупать большие упаковки. Если есть выбор,
              покупайте экологические средства для уборки дома у местных производителей,
              так вы сведете к минимуму свой углеродный след.
            </p>
            <p className="blockquote">
              Экомебель и здоровье
            </p>
            <p>
              В экологическом дизайне часто используется экомебель из ротанга и
              других натуральных материалов. Ротанг – тропическая лиана, из которой
              изготовляют прочные и легкие изделия. Будьте внимательны, сейчас в магазинах
              все чаще можно увидеть мебель из искусственного ротанга, проще говоря - из
              пластика. Такая мебель более неприхотлива, смотрится привлекательно, но
              уступает натуральной в экологичности. Настоящий ротанг долговечен и отлично
              смотрится в сочетании с другими натуральными материалами, поэтому такую
              мебель часто используют на улице, на даче, на террасе. Однако за такой
              мебелью нужно ухаживать, она быстро портится от воды и прямых солнечных
              лучей.
            </p>
          </div>
        </div>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                Стиль ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFour;
