import React from "react";

import belanjaFillIcon from "@Assets/icons/belanja-fill-icon.svg";
import belanjaIcon from "@Assets/icons/belanja-icon.svg";
import riwayatFillIcon from "@Assets/icons/history-fill-icon.svg";
import riwayatIcon from "@Assets/icons/history-icon.svg";
import profileFillIcon from "@Assets/icons/profile-fill-icon.svg";
import profileIcon from "@Assets/icons/profile-icon.svg";

export default function MenuItem({ name, fill }) {
  return (
    <div class="col my-auto" style={{cursor: "pointer"}}>
      <img
        src={
          name === "Belanja" && fill
            ? belanjaFillIcon 
            : name === "Belanja" && fill === false
            ? belanjaIcon
            : name === "Riwayat" && fill
            ? riwayatFillIcon
            : name === "Riwayat" && fill === false
            ? riwayatIcon
            : name === "Profil" && fill
            ? profileFillIcon
            : name === "Profil" && fill === false
            ? profileIcon
            : ""
        }
        alt="icons"
      />
      <p
        style={{
          fontSize: "11px",
          fontWeight: "600",
          color: fill ? "rgba(106, 164, 52, 1)" : "rgba(196, 196, 196, 1)",
          marginTop: "6px",
        }}
      >
        {name}
      </p>
    </div>
  );
}
