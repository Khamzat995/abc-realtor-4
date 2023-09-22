import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
const HomeFurniture = lazy(() => import("./pages/home/HomeFurniture"));

// shop pages
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);
const BlogDetailsStandardOne = lazy(() =>
  import("./pages/blog/BlogDetailsStandardOne")
);
const BlogDetailsStandardTwo = lazy(() =>
  import("./pages/blog/BlogDetailsStandardTwo")
);
const BlogDetailsStandardThree = lazy(() =>
  import("./pages/blog/BlogDetailsStandardThree")
);
const BlogDetailsStandardFour = lazy(() =>
  import("./pages/blog/BlogDetailsStandardFour")
);
const BlogDetailsStandardFive = lazy(() =>
  import("./pages/blog/BlogDetailsStandardFive")
);
const BlogDetailsStandardSix = lazy(() =>
  import("./pages/blog/BlogDetailsStandardSix")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          tr: require("./translations/turkish.json"),
          ru: require("./translations/russian.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeFurniture}
                />

                {/* Homepages */}



                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                  component={ShopGridTwoColumn}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-standard"}
                  component={BlogStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard"}
                  component={BlogDetailsStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard"}
                  component={BlogDetailsStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-one"}
                  component={BlogDetailsStandardOne}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-two"}
                  component={BlogDetailsStandardTwo}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-three"}
                  component={BlogDetailsStandardThree}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-four"}
                  component={BlogDetailsStandardFour}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-five"}
                  component={BlogDetailsStandardFive}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard-six"}
                  component={BlogDetailsStandardSix}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
