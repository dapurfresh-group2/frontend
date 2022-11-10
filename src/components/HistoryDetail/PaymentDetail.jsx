import React from "react";
import toRupiahFormat from "@Utils/logic/toRupiahFormat";

export default function PaymentDetail({ ongkosKirim, total }) {
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
            Detail Pembayaran
          </p>
          <div
            className="d-flex justify-content-between"
            style={{
              marginBottom: "9px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Subtotal
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Rp5.200
            </p>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{
              marginBottom: "9px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Ongkos Kirim
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              {toRupiahFormat(parseInt(ongkosKirim))}
            </p>
          </div>
          <hr style={{ borderTop: "2px dashed rgba(196, 196, 196, 1)" }} />
          <div
            className="d-flex justify-content-between"
            style={{
              marginBottom: "9px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Total
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              {toRupiahFormat(parseInt(total))}
            </p>
          </div>
          <hr style={{ borderTop: "2px dashed rgba(196, 196, 196, 1)" }} />
          <div
            className="d-flex justify-content-between"
            style={{
              marginBottom: "9px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Bayar TUNAI
            </p>
            <div className="d-flex">
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "rgba(142, 145, 148, 1)",
                  border: "1px solid rgba(142, 145, 148, 1)",
                  borderRadius: "1px",
                  padding: "0px 2.5px",
                  marginRight: "5px"
                }}
              >
                Rp
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "rgba(68, 68, 68, 1)",
                }}
              >
                Rp3.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
