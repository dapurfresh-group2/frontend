import React from "react";
import MenuItem from "./MenuItem";

export default function MenuBar({ isActive }) {
  return (
    <div
      className="w-100 text-center bg-white border-top mx-auto fixed-bottom"
      style={{
        height: "60px",
        maxWidth: "360px",
        borderColor: "gray",
      }}
    >
      <div
        className="row h-100"
        style={{
          "--bs-gutter-x": "0px !important",
        }}
      >
        <MenuItem name="Belanja" path="/" fill={isActive === "Belanja" ? true : false} />
        <MenuItem name="Riwayat" path="/historyorder" fill={isActive === "Riwayat" ? true : false} />
        <MenuItem name="Profil" path="/profile" fill={isActive === "Profil" ? true : false} />
      </div>
    </div>
  );
}
