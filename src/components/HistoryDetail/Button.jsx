import React from "react";

export default function Button({ status }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(196, 196, 196, 1)",
        padding: "15px",
      }}
    >
      <button
        className="w-100 text-white"
        style={{
          backgroundColor: "rgba(106, 164, 52, 1)",
          fontWeight: "700",
          fontSize: "17px",
          borderRadius: "5px",
          padding: "12px 0px",
        }}
      >
        Bantuan
      </button>
      {status === "proses" ? (
        <button
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
