import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GetOrderTime from "@Utils/logic/getOrderTime";

export default function CustomerDetail({ status, name, waktuDiantar }) {

  const [deliveryDate, setDeliveryDate] = useState();

  useEffect(() => {
    const FetchDeliveryDate = async () => {
      const deliveryDateRes = await GetOrderTime(waktuDiantar);
      setDeliveryDate(deliveryDateRes);
    };

    FetchDeliveryDate();

  }, [waktuDiantar]);

  return (
    <div className="border-bottom pb-3" style={{ marginTop: "52px" }}>
      <div
        className="d-flex justify-content-between px-3 py-2 mb-1"
        style={{ backgroundColor: "rgba(242, 242, 242, 1)" }}
      >
        <p
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
              color:
                status === "Proses"
                  ? "rgba(0, 172, 15, 1)"
                  : "rgba(239, 38, 54, 1)",
            }}
          >
            {status}
          </span>
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(136, 136, 136, 1)",
          }}
        >
          Diantar: <span style={{ fontWeight: "700" }}>{deliveryDate}</span>
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
          {name}
        </p>
      </div>
    </div>
  );
}
