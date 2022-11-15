import React from "react";
import searchIcon from "@Assets/icons/search-icon.svg";

export default function Search() {
  return (
    <a href="/search" style={{ cursor: "pointer" }}>
      <div className="d-flex w-100 bg-white rounded-pill mt-3 px-3 py-2">
        <img src={searchIcon} alt="search" />
        <p
          className="w-100"
          style={{ fontSize: "12px", fontWeight: "500", color: "#707585", padding: "2.5px 0px", marginLeft: "10px" }}
        >
          Cari sayur, bumbu dapur, lauk pauk...
        </p>
      </div>
    </a>
  );
}
