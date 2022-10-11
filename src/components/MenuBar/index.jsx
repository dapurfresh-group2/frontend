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
      <div class="row h-100">
        <MenuItem name="Belanja" fill={isActive === "Belanja" ? true : false} />
        <MenuItem name="Riwayat" fill={isActive === "Riwayat" ? true : false} />
        <MenuItem name="Profil" fill={isActive === "Profil" ? true : false} />
      </div>
    </div>
  );
}
