import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Общая информация 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Подробности</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
              </Nav.Item> */}
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>ТАПУ</span> <br/>  Право собственности (TAPU) регистрируется в кадастровом комитете по месту покупки недвижимости.  Покупатель и продавец подписывают акт об отсутствие взаимных претензий в присутствии присяжного переводчика, после чего происходит передача права собственности. Нового владельца вписывают в кадастровую книгу и выдается кадастровый лист (Свидетельство о владении недвижимостью, по турецки - ТАПУ).

                    </li>
                    <li>
                      <span>Документы для подачи в Кадастровый комитет:</span> <br/>
                      1. ТАПУ недвижимости, которое будет оформлено в собственность на нового владельца. В случае отсутствия ТАПУ точные данные объекта (название местности/район, кадастровые номера ( ада, парсель) и т.д).<br/>

2. Паспорт, перевод паспорта.<br/>

3. Документ из местного муниципалитета, где прописана минимальная заявленная стоимость недвижимости.<br/>

4. Для зданий (квартира, вилла коммерческая недвижимость) страховка от землетрясения -DASK.<br/>

5. 1 фото продавца, 2 фото покупателя. Фото должны быть сделаны в течение последних 6 месяцев, размер 3х4.<br/>

6. Переводчик и два свидетеля для покупателей, не владеющих турецким языком.<br/>

7. При переоформлении собственности посредством доверенности, составленной за границей, обязательно предоставить ее перевод и оригинал, либо заверенную у нотариуса копию.<br/>

Доверенность, полученная за границей должна быть либо:<br/>

— Составлена и заверена в Турецком Посольстве или Консульстве<br/>
— Доверенность должна быть оформлена апостилем

{" "}
                    </li>
                    <li>
                      <span>Расходы, связанные с оформлением ТАПУ:</span> <br/>
                      — Налог купли-продажи. 4% от суммы, прописанной в ТАПУ (стоимость недвижимого имущества)<br/>
— Сбор местного кадастрового комитета<br/>
— Канцелярские сборы кадастрового комитета<br/>
— Услуги переводчика.
                    </li>
                    {/* <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li> */}
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              {/* <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt="картинка"
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt="картинка"
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
