import React from "react";
import infoIcon from "@Assets/icons/info-checkout-icon.svg";

export default function Info() {
  return (
    <div className="p-3 py-4 border-bottom border-2">
      <div
        className="d-flex rounded"
        style={{
          backgroundColor: "rgba(247, 247, 249, 1)",
          padding: "15px",
        }}
      >
        <img src={infoIcon} className="mb-auto" alt="info-icon" />
        <div className="ms-2">
          <p
            style={{
              fontWeight: "300",
              fontSize: "12px",
              color: "rgba(159, 163, 166, 1)",
            }}
          >
            Order{" "}
            <span
              style={{
                fontWeight: "600",
              }}
            >
              sebelum jam 8 malam{" "}
            </span>
            akan diantarkan oleh kurir kami{" "}
            <span
              style={{
                fontWeight: "600",
              }}
            >
              besok Pagi
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
