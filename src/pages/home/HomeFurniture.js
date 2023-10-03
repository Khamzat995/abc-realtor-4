import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
/* import BannerTwo from "../../wrappers/banner/BannerTwo"; */
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import MedicalContact from "../../components/contact/MedicalContact";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";

const HomeFurniture = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ISTANBUL EXPERT | ГЛАВНАЯ</title>
        <meta
          name="description"
          content="Mебель из Турции по ценам фабрик производителей. Доставка до вашего дома."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwo />

        {/* banner */}
        {/* <BannerTwo spaceTopClass="pt-80" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        <TabProductTwo spaceBottomClass="pb-100" category="Квартиры" />

        {/* countdown */}
        <CountDownOne
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-11.jpg"
          dateTime="December 31, 2023 12:00:00"
        />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" />

        {/* contact */}
        <MedicalContact />

        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />

        {/* newsletter */}
        <NewsletterTwo
          spaceBottomClass="pb-100"
          subscribeBtnClass="pink-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurniture;
