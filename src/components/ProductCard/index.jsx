import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@Redux/cartSlice";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

import PlusButtonText from "./PlusButtonText";
import infoIcon from "@Assets/icons/info-icon.svg";
import QuantityButton from "./QuantityButton";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";

export default function ProductCard({ id, img, name, price, info, weight }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(0);
  const onClickMinHandler = () => {
    setQuantity(quantity - 1);
  };
  const onClickPlusHandler = () => {
    setQuantity(quantity + 1);
  };

  const getProductQuantity = () => {
    const filteredProduct = cart
      ? cart.filter((product) => product.id === id)
      : { quantity: 0 };
    return filteredProduct.quantity || 0;
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
          <div className="d-flex mt-3">
            <h2
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#444444",
                marginBottom: "0px",
              }}
            >
              {toRupiahFormat(price)}
            </h2>
          </div>
          <div className="d-flex align-items-center mt-1">
            {getProductQuantity() === 0 ? (
              <PlusButtonText
                onClickPlusHandler={() => {
                  dispatch(addToCart({ id, quantity }));
                }}
              />
            ) : (
              <QuantityButton
                quantity={quantity}
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
