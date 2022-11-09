import React from "react";
import { useSelector, useDispatch } from "react-redux";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";
import ButtonMain from "@Components/Button/ButtonMain";
import postCheckoutCart from "@Api/order/postCheckoutCart";
import getActiveCart from "@Api/cart/getActiveCart";
import Swal from "sweetalert2";

export default function Payment({ name, phone, address, note }) {
  const cart = useSelector((state) => state.carts.cart);
  const dispatch = useDispatch();

  const onClickCheckoutHandler = async () => {
    if (!name || !phone || !address) {
      Swal.fire({
        icon: "error",
        title: "Checkout Gagal",
        text: "Kamu harus memasukkan datamu terlebih dahulu",
        width: 310,
        showConfirmButton: false,
      });
    } else {
      const res = await postCheckoutCart(cart.id, {
        name,
        phone,
        address,
        note,
        shippingPrice: 5000,
        totalPrice: cart.final_price,
      }).then((res) => {
        dispatch(getActiveCart());
        if (res.data.message === "success") {
          Swal.fire({
            icon: "success",
            title: "Checkout Berhasil",
            text: "Pesananmu akan segera diantar",
            width: 310,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = "/historyorder";
          });
        }
      });
    }
  };

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
        <ButtonMain text="Pesan" onClick={() => onClickCheckoutHandler()} />
      </div>
    );
  }
}
