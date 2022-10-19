import React from "react";
import ButtonMain from "@Components/Button/ButtonMain";

export default function Button({ status, cancelOrderOnClick }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(196, 196, 196, 1)",
        padding: "15px",
      }}
    >
      <ButtonMain text="Bantuan" />
      {status === "proses" ? (
        <button
          onClick={() => cancelOrderOnClick()}
          className="w-100 bg-white"
          style={{
            fontWeight: "700",
            fontSize: "17px",
            borderRadius: "5px",
            padding: "8px 0px",
            color: "rgba(159, 163, 166, 1)",
            marginTop: "9px",
            border: "2px solid rgba(159, 163, 166, 1)",
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Batalkan Pesanan
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
