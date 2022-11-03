import React from "react";
import lineIcon from "@Assets/icons/line.svg";
import cartIcon from "@Assets/icons/cart-icon.svg";
import { useEffect } from "react";
import getActiveCart from "@Api/cart/getActiveCart";

export default function ButtonCart({ totalBill, quantity, bottom }) {
  useEffect(() => {
    const fetch = async () => {
      const res = await getActiveCart();
      console.log(res);
    };
    fetch();
  }, []);

  return (
    <div
      id="floatingCart"
      className="fixed-bottom px-2 floatingCart"
      style={{
        bottom: bottom || "20px",
      }}
    >
      <a href="/checkout">
        <button
          className="d-flex mx-auto justify-content-between px-4 py-3 mx-auto w-100"
          style={{
            backgroundColor: "rgba(106, 164, 52, 1)",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            maxWidth: "340px",
          }}
        >
          <div className="d-flex">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "white",
                marginRight: "10px",
                width: "46px",
              }}
            >
              {quantity} item
            </p>
            <img src={lineIcon} alt="line icon" />
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Rp{totalBill}
            </p>
          </div>
          <img src={cartIcon} alt="" />
        </button>
      </a>
    </div>
  );
}
