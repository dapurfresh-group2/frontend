import React from "react";

export default function OrderDetail() {
  return (
    <div>
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
            Detail Pesanan
          </p>
          <div className="d-flex justify-content-between">
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Kangkung
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              1 x 1 Ikat
            </p>
          </div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "rgba(136, 136, 136, 1)",
              marginBottom: "9px",
              marginTop: "9px",
            }}
          >
            Catatan Tambahan
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Jangan pakai plastik
          </p>
        </div>
      </div>
    </div>
  );
}
