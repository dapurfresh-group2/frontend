import React from "react";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

import PlusButtonText from "./PlusButtonText";
import infoIcon from "@Assets/icons/info-icon.svg";
import QuantityButton from "./QuantityButton";

export default function ProductCard({ img }) {
  const [quantity, setQuantity] = useState(0);
  const onClickMinHandler = () => {
    setQuantity(quantity - 1);
  };
  const onClickPlusHandler = () => {
    setQuantity(quantity + 1);
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
              Kangkung
            </h1>
            <Tippy
              maxWidth={185}
              content="1 ikat kangkung setara dengan 500 gr"
              placement="bottom-end"
              theme="light"
              trigger="click"
              animation="fade"
            >
              <img style={{ cursor: "pointer" }} src={infoIcon} alt="info" />
            </Tippy>
          </div>
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
              10%
            </p>
          </div>
          <div className="d-flex">
            <h2
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#444444",
                marginBottom: "0px",
              }}
            >
              Rp 4.680
            </h2>
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
              Rp 5.200
            </h3>
          </div>
          <div className="d-flex align-items-center mt-1">
            {quantity === 0 ? (
              <PlusButtonText onClickPlusHandler={onClickPlusHandler} />
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
              x 1 ikat
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: "11px",
          fontWeight: "400",
          color: "rgba(239, 38, 54, 1)",
          marginTop: "5px",
          textAlign: "right",
        }}
      >
        Promo! Maksimal: 3
      </p>
    </div>
  );
}
