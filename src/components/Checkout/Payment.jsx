import React from "react";
import ButtonMain from "@Components/Button/ButtonMain";

export default function Payment() {
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
          Rp4.680
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
          Rp3.000
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
          Rp7.680
        </p>
      </div>
      <ButtonMain text="Pesan" />
    </div>
  );
}
