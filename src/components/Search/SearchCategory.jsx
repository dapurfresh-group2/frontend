import React from "react";
import searchIcon from "@Assets/icons/search-icon.svg";

export default function SearchCategory() {
  return (
      <div
        className="d-flex w-100 rounded-pill px-3 py-2"
        style={{
          backgroundColor: "rgba(242, 242, 242, 1)",
        }}
      >
        <img src={searchIcon} alt="search" />
        <input
          className="w-100"
          placeholder="Cari sayur, bumbu dapur, lauk pauk..."
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#707585",
            backgroundColor: "rgba(242, 242, 242, 1)",
            padding: "2.5px 0px",
            marginLeft: "10px",
          }}
        />
      </div>
  );
}
