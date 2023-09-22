import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Поиск </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Введите слово ..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Свежие проекты </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-42.webp"
                  }
                  alt="картинка"
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Стиль</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Интерьер
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-41.webp"
                  }
                  alt="картинка"
                />
              </Link>
            </div>

            <div className="sidebar-blog-content">
              <span>Люди</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                  Профессии
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-44.webp"
                  }
                  alt="картинка"
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>жизнь</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  Путешествия
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-46.webp"
                  }
                  alt="картинка"
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Образование</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                  Учеба в Турции
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Категории</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Дизайн и интерьер <span>14</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Жизнь и здоровье <span>8</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Путешествия <span>12</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Бизнес и инвестиции <span>10</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Теги </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Мебель
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                Природа
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Бренды
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                Здоровье
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>Турция</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                Стиль
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
