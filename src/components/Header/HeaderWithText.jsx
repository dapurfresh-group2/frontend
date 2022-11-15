import React from "react";

export default function HeaderWithText({ text }) {
  return (
    <div
      className="w-100"
      style={{
        backgroundColor: "rgba(106, 164, 52, 1)",
        padding: "15px",
      }}
    >
      <h1
        className="text-white"
        style={{
          fontSize: "22px",
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
