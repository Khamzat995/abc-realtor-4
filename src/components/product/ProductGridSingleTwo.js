import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

const ProductGridSingleTwo = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  titlePriceClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${sliderClassName ? sliderClassName : ""
          }`}
      >
        <div
          className={`product-wrap-2 ${spaceBottomClass ? spaceBottomClass : ""
            } ${colorClass ? colorClass : ""} `}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt="картинка"
              />
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt="картинка"
                />
              ) : (
                ""
              )}
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="red">Сдача объекта {product.discount} г.</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">Новинка</span> : ""}
              </div>
              

            ) : (
              ""
            )}
            
              <p className="product-p-citizenship">{product.citizenship}</p>
              
               

            <div className="product-action-2">
              {/* {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Buy now"
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                  title="Select options"
                >
                  <i className="fa fa-cog"></i>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? "active"
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? "Добавлено в корзину" : "Добавить в корзину"
                  }
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </button>
              ) : (
                <button disabled className="active" title="Out of stock">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              )} */}

              <button onClick={() => setModalShow(true)} title="Посмотреть">
                <i className="fa fa-eye"></i>
              </button>

              <button
                className={compareItem !== undefined ? "active" : ""}
                disabled={compareItem !== undefined}
                title={
                  compareItem !== undefined
                    ? "Добавлено для сравнения"
                    : "Добавить к сравнению"
                }
                onClick={() => addToCompare(product, addToast)}
              >
                <i className="fa fa-retweet"></i>
              </button>
            </div>
          </div>


          <div className="product-content-2">
            <div
              className={`title-price-wrap-2 ${titlePriceClass ? titlePriceClass : ""
                }`}
            >
              <h3>
                <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  {product.name}
                </Link>
              </h3>

              <div className="price-2">
                {discountedPrice !== null ? (
                  <Fragment>
                    <span>
                      {currency.currencySymbol + finalDiscountedPrice}
                    </span>{" "}
                    {/* <span className="old">
                      {currency.currencySymbol + finalProductPrice}
                    </span> */}
                  </Fragment>
                ) : (
                  <span>{currency.currencySymbol + finalProductPrice} </span>
                )}
              </div>

              
             
              
            </div>
            <div className="pro-wishlist-2">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Добавлено в список Избранных"
                    : "Добавить в список Избранных"
                }
                onClick={() => addToWishlist(product, addToast)}
              >
                <i className="fa fa-heart-o" />
              </button>
            </div>
          </div>

            <div className="product-discript-mappus">
          <div className="product-discript-map">
          <i className="fa fa-bed" aria-hidden="true"></i>
          &nbsp;&nbsp;<h5>{product.rooms}</h5>
          </div>

          <div className="product-discript-map">
          <i className="fa fa-cube" aria-hidden="true"></i>
          &nbsp;&nbsp;<h5>{product.square} м²</h5>
             </div>

             <div className="product-discript-map">
             <i className="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;
              <h5>{product.tag[0]} </h5>
             </div>
             </div>

             <div className="product-discript">
            <div className="product-discript-map">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          <h5>&nbsp;{product.location}</h5>
            </div>

          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridSingleTwo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default ProductGridSingleTwo;
