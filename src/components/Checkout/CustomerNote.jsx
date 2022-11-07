import React from "react";
import noteIcon from "@Assets/icons/note-icon.svg";

export default function CustomerNote({ value, onChange }) {
  return (
    <div
      className="p-3 py-4 border-bottom border-2"
      style={{
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1
        style={{
          fontWeight: "600",
          fontSize: "19px",
          marginBottom: "15px",
          color: "rgba(68, 68, 68, 1)",
        }}
      >
        Catatan Tambahan
      </h1>
      <div
        className="d-flex rounded"
        style={{
          backgroundColor: "rgba(247, 247, 249, 1)",
          padding: "14px 20px",
        }}
      >
        <img src={noteIcon} alt="note-icon" />
        <input
          type="text"
          placeholder="Tambah satu ayam kampung ya"
          className="w-100"
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: "rgba(247, 247, 249, 1)",
            marginLeft: "12px",
            fontWeight: "500",
            fontSize: "15px",
          }}
        />
      </div>
    </div>
  );
}
