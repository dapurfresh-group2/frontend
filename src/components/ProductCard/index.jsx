import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

import PlusButtonText from "./PlusButtonText";
import infoIcon from "@Assets/icons/info-icon.svg";
import QuantityButton from "./QuantityButton";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";
import updateCartProductQuantity from "@Api/cart/updateCartProductQuantity";
import getActiveCart from "@Api/cart/getActiveCart";
import getPriceBeforeDiscount from "@Utils/logic/getPriceBeforeDIscount";

export default function ProductCard({
  id,
  img,
  name,
  price,
  info,
  weight,
  discount = 10,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);

  const getProductQuantity = () => {
    if (cart.cart_items) {
      const filteredProduct = cart.cart_items
        ? cart.cart_items.filter((product) => product.productId === id)
        : [];
      return filteredProduct.length > 0 ? filteredProduct[0].quantity : 0;
    } else {
      return 0;
    }
  };

  const onClickAddProduct = () => {
    dispatch(updateCartProductQuantity({ id, quantity: 1 })).then(() => {
      dispatch(getActiveCart());
    });
  };
  const onClickMinHandler = () => {
    dispatch(
      updateCartProductQuantity({ id, quantity: getProductQuantity() - 1 })
    ).then(() => {
      dispatch(getActiveCart());
    });
  };
  const onClickPlusHandler = () => {
    dispatch(
      updateCartProductQuantity({ id, quantity: getProductQuantity() + 1 })
    ).then(() => {
      dispatch(getActiveCart());
    });
  };

  return (
    <div
      className="mb-3 p-3 rounded"
      style={{
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25",
      }}
    >
      <div className="d-flex">
        <img
          src={img}
          alt="product-img"
          style={{ width: "80px", height: "80px", borderRadius: "5px" }}
        />
        <div className="ms-3 w-100">
          <div className="d-flex justify-content-between align-content-start mb-1">
            <h1
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#444444",
                marginBottom: "0px",
              }}
            >
              {name}
            </h1>
            {info ? (
              <Tippy
                maxWidth={185}
                content={info}
                placement="bottom-end"
                theme="light"
                trigger="click"
                animation="fade"
              >
                <img style={{ cursor: "pointer" }} src={infoIcon} alt="info" />
              </Tippy>
            ) : null}
          </div>
          {discount !== 0 ? (
            <div
              className="rounded-pill mb-1"
              style={{
                backgroundColor: "rgba(255, 214, 0, 1)",
                padding: "1px 5px",
                width: "max-content",
              }}
            >
              <p
                className="text-danger my-auto"
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  color: "#444444",
                  marginBottom: "0px",
                }}
              >
                {`${discount}%`}
              </p>
            </div>
          ) : (
            <div
              style={{ height: "21px", width: "100%", backgroundColor: "#FFF" }}
            ></div>
          )}
          <div className={discount !== 0 ? "d-flex" : "d-flex"}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#444444",
                marginBottom: "0px",
                marginRight: "5px",
              }}
            >
              {toRupiahFormat(price)}
            </h2>
            {discount !== 0 ? (
              <h3
                className="ms-1"
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "rgba(68, 68, 68, 0.5)",
                  marginTop: "1px",
                  marginBottom: "0px",
                  textDecoration: "line-through",
                }}
              >
                {toRupiahFormat(
                  getPriceBeforeDiscount(price, discount).toFixed()
                )}
              </h3>
            ) : null}
          </div>
          <div className="d-flex align-items-center mt-1">
            {getProductQuantity() === 0 ? (
              <PlusButtonText
                onClickPlusHandler={() => {
                  onClickAddProduct();
                }}
              />
            ) : (
              <QuantityButton
                quantity={getProductQuantity()}
                onClickMinHandler={onClickMinHandler}
                onClickPlusHandler={onClickPlusHandler}
              />
            )}
            <p
              className="ms-2"
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginBottom: "0px",
              }}
            >
              x {weight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
