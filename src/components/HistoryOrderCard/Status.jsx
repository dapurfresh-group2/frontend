import React from "react";

export default function Status({ type }) {
  if (type === "proses") {
    return (
      <div
        className="rounded-pill px-2"
        style={{ backgroundColor: "rgba(0, 172, 15, 1)", height: "25px" }}
      >
        <p
          className="text-white mt-1"
          style={{ fontWeight: "500", fontSize: "12px" }}
        >
          Proses
        </p>
      </div>
    );
  } else if (type === "batal") {
    return (
      <div
        className="rounded-pill"
        style={{ backgroundColor: "rgba(239, 38, 54, 1)", height: "25px", padding: "0px 12.5px" }}
      >
        <p
          className="text-white mt-1"
          style={{ fontWeight: "500", fontSize: "12px" }}
        >
          Batal
        </p>
      </div>
    );
  }
}
