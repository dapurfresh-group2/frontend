import React from "react";
import Status from "./Status";

export default function index({ name, date, status }) {
  return (
    <div
      className="d-flex justify-content-between w-100 py-3 px-2 rounded-1"
      style={{
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
        marginBottom: "10px",
      }}
    >
      <div>
        <h3
          style={{
            fontWeight: "600",
            fontSize: "14px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "233px",
            marginBottom: "7px"
          }}
        >
          {name}
        </h3>
        <p style={{ fontWeight: "400", fontSize: "12px" }}>{date}</p>
      </div>
      <Status type={status} />
    </div>
  );
}
