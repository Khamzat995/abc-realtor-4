import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Questions = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>ISTANBUL EXPERT | Вопросы</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Часто задаваемые вопросы
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Почему реальная площадь квартиры не соответствует указанной в ТАПУ?{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>В свидетельстве указывается площадь, которой владеет собственник, а это не только сама квартира, но и часть лестничных пролетов и других общественных помещений. Именно поэтому площадь в ТАПУ больше площади приобретаемого жилья.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>2 .</span> Что выгоднее покупать: готовую или строящуюся недвижимость?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5> У каждого варианта есть свои плюсы и минусы. Строящаяся недвижимость обойдется вам на 20–50 % дешевле, а готовый объект можно сразу сдавать в аренду, получая прибыль. Расскажите нам о цели покупки и вашем бюджете, мы подскажем оптимальное в вашем случае решение.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="3">
                          <h3 className="panel-title">
                            <span>3 .</span>  Как быстро после покупки апартаментов их можно сдавать?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Недвижимость можно сдавать сразу. Но стоит помнить, что согласно новому закону, сдавать жилье в аренду на короткий срок могут только компании. Мы готовы взять на себя как вопросы поиска арендаторов, так и заботы об обслуживании вашей недвижимости в течение года.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="4">
                          <h3 className="panel-title">
                            <span>4 .</span> Можно ли иностранцу взять ипотеку в Турции?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5> Да, это возможно. Об условиях можно узнать у наших консультантов.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="5">
                          <h3 className="panel-title">
                            <span>5 .</span> Что такое айдат?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="5">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Это ежемесячный платеж за содержание ЖК, который платит любой владелец апартаментов. Из этой суммы выделяются деньги на уборку территории, зарплату охраннику, обслуживание бассейна и т.п.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="6">
                          <h3 className="panel-title">
                            <span>6 .</span> Могут ли получить вид на жительство родственники покупателя?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="6">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Да, в Турции выдается вид на жительство родителям, супругу (супруге) и детям собственника недвижимости. Главное – подтвердить родство.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="7">
                          <h3 className="panel-title">
                            <span>7 .</span> Выдается ли ВНЖ при покупке недвижимости?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="7">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Да. Вам понадобится подать анкету с фотографией, копию загранпаспорта и ТАПУ, справку о доходах. Обычно вид на жительство выдается на один год с возможностью продления. Обращайтесь, мы поможем с оформлением.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="8">
                          <h3 className="panel-title">
                            <span>8 .</span>От чего зависит цена на недвижимость в Турции?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="8">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Зависит от вида объекта и местоположения. Обратитесь к нашему менеджеру, мы подробно расскажем. Стамбул и Измир – одни из самых дорогих городов, на втором месте популярные курорты – Анталия и Кемер, а вот недвижимость в Алании одна из самых дешевых в стране. Но стоимость зависит еще и от других факторов:

этаж – чем ниже, тем дешевле;
вид из окна и удаленность от моря;
развитость инфраструктуры;
качество отделки и т. п.
Задайте нам свой вопрос в чате, и мы подберем недвижимость под ваши пожелания.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="9">
                          <h3 className="panel-title">
                            <span>9 .</span>  Какой в Турции налог на недвижимость?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="9">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Ежегодно два раза в год собственники платят 0,1-0,2 % от стоимости виллы или апартаментов и 0,2–0,4 % от стоимости коммерческого объекта. На ставку налога влияет как вид недвижимости, так и ее местоположение (в крупных городах – Анталии, Измире, Стамбуле и других – налог выше). При покупке оплачивается налог на ТАПУ в размере 4 %.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="10">
                          <h3 className="panel-title">
                            <span>10 .</span>  Что такое ТАПУ?
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="10">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h5>Это документ, подтверждающий право собственности на недвижимость. В ТАПУ указываются данные собственника, фотография, информация о месторасположении объекта, его кадастровом номере и т.п.</h5>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Questions.propTypes = {
  location: PropTypes.object
};

export default Questions;