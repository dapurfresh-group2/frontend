import React from "react";

export default function ButtonMain({ text }) {
  return (
    <>
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
        {text}
      </button>
    </>
  );
}
