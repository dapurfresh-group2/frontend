import React from "react";
import { useSelector, useDispatch } from "react-redux";
import lineIcon from "@Assets/icons/line.svg";
import cartIcon from "@Assets/icons/cart-icon.svg";
import { useEffect } from "react";
import getActiveCart from "@Api/cart/getActiveCart";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";

export default function ButtonCart({ bottom }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);

  const getItemsCartQantity = () => {
    let quantity = 0;
    if (cart?.length === 0) {
      return quantity;
    } else {
      cart.cart_items.forEach((item) => {
        quantity += item.quantity;
      });
      return quantity;
    }
  };

  useEffect(() => {
    dispatch(getActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cart?.length === 0) {
    return null;
  } else {
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
                }}
              >
                {getItemsCartQantity()} item
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
                {toRupiahFormat(cart.final_price)}
              </p>
            </div>
            <img src={cartIcon} alt="" />
          </button>
        </a>
      </div>
    );
  }
}
