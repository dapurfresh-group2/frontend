import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getOrderTime from "@Utils/logic/getOrderTime";

export default function CustomerDetail({ status, name, date }) {
  return (
    <div className="border-bottom pb-3" style={{ marginTop: "52px" }}>
      <div
        className="d-flex justify-content-between px-3 py-2 mb-1"
        style={{ backgroundColor: "rgba(242, 242, 242, 1)" }}
      >
        <p
          className="d-flex"
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(136, 136, 136, 1)",
          }}
        >
          Status:{" "}
          <span
            style={{
              textTransform: "capitalize",
              marginLeft: "3px",
              color:
                status === "Proses"
                  ? "rgba(0, 172, 15, 1)"
                  : "rgba(239, 38, 54, 1)",
            }}
          >
            {status ? status : <Skeleton width={50} />}
          </span>
        </p>
        <p
          className="d-flex"
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(136, 136, 136, 1)",
          }}
        >
          Diantar:{" "}
          <span style={{ fontWeight: "700", marginLeft: "3px" }}>
            {date ? getOrderTime(date) : <Skeleton width={80} />}
          </span>
        </p>
      </div>
      <div className="mx-3">
        <p
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(136, 136, 136, 1)",
            marginBottom: "9px",
          }}
        >
          Detail Pemesan
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "rgba(68, 68, 68, 1)",
          }}
        >
          {name ? name : <Skeleton width={100} />}
        </p>
      </div>
    </div>
  );
}
