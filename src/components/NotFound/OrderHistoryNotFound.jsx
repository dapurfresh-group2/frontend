import React from "react";
import historyNotFoundIcon from "@Assets/icons/history-not-found-icon.svg";

export default function OrderHistoryNotFound() {
  return (
    <div className="w-100 h-100 text-center" style={{ marginTop: "110px" }}>
      <img src={historyNotFoundIcon} alt="history-not-found" />
      <h2 className="mt-4" style={{ fontWeight: "600", fontSize: "16px" }}>
        Riwayat pesananmu masih kosong
      </h2>
      <p className="mt-3 mx-auto" style={{ fontWeight: "400", fontSize: "12px", maxWidth: "250px" }}>
        Cari kebutuhan produkmu sekarang juga, yuk belanja!
      </p>
    </div>
  );
}
