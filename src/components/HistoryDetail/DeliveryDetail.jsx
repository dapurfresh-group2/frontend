import React from "react";
import homeIcon from "@Assets/icons/home-icon.svg";

export default function DeliveryDetail() {
  return (
    <div className="border-bottom py-3">
      <div className="mx-3">
        <p
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(136, 136, 136, 1)",
            marginBottom: "9px",
          }}
        >
          Detail Pengantaran
        </p>
        <div className="d-flex">
          <img src={homeIcon} alt="Home Icon" />
          <div className="ms-1">
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Lokasi Tujuan
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Jl. Letjen Suprapto No. 59
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
