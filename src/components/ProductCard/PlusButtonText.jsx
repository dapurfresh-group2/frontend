import React from "react";
import plusIcon from "@Assets/icons/plus-icon.svg";

export default function PlusButtonText() {
  return (
    <div
      className="d-flex text-white"
      style={{
        boxShadow: "1px 2px 5px 0px rgba(0, 0, 0, 0.15)",
        backgroundColor: "rgba(106, 164, 52, 1)",
        borderRadius: "5px",
        padding: "5px 10px"
      }}
    >
      <img src={plusIcon} alt="plus-icon" />
      <p
        className="ms-1"
        style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "0px",
        }}
      >
        Tambah
      </p>
    </div>
  );
}
