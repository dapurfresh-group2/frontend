import React from "react";
import { useSelector } from "react-redux";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";
import ButtonMain from "@Components/Button/ButtonMain";

export default function Payment() {
  const cart = useSelector((state) => state.carts.cart);
  if (cart.length === 0) {
    return null;
  } else {
    return (
      <div
        className="p-3 fixed-bottom bg-white mx-auto"
        style={{
          boxShadow: "0px -1px 5px 0px rgba(0, 0, 0, 0.2)",
          maxWidth: "360px",
        }}
      >
        <div
          className="d-flex justify-content-between"
          style={{
            marginBottom: "5px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Subtotal
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            {toRupiahFormat(cart.final_price)}
          </p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            marginBottom: "5px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Ongkos Kirim
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Rp5.000
          </p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            marginBottom: "5px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Total Pembayaran
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "700",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            {toRupiahFormat(cart.final_price + 5000)}
          </p>
        </div>
        <ButtonMain text="Pesan" />
      </div>
    );
  }
}
