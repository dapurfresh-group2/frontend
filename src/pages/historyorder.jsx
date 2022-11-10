import React from "react";
import { useEffect, useState } from "react";
import getHistoryOrder from "@Api/order/getHistoryOrder";
import convertDate from "@Utils/logic/convertTime";
import HistoryOrderCard from "@Components/HistoryOrderCard";
import MenuBar from "@Components/MenuBar";
import HeaderWithText from "@Components/Header/HeaderWithText";
import OrderHistoryNotFound from "@Components/NotFound/OrderHistoryNotFound";
import SkeletonHistory from "@Components/SkeletonLoading/SkeletonHistory";

export default function HistoryOrder() {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHistoryOrder();
      setHistoryData(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderWithText text="Riwayat Pesanan" />
      <div className="mx-3" style={{ marginBottom: "85px" }}>
        {Array.isArray(historyData) ? (
          historyData.length > 0 ? (
            <>
              <h2
                className="my-3"
                style={{ fontSize: "16px", fontWeight: "700" }}
              >
                Hari Ini
              </h2>
              {historyData.map((history) => (
                <a
                  style={{ textDecoration: "none" }}
                  href={`/historyorder/${history.id}`}
                >
                  <HistoryOrderCard
                    key={history.id}
                    name={history.name}
                    date={convertDate(history.createdAt)}
                    status={history.status.toLowerCase()}
                  />
                </a>
              ))}
            </>
          ) : (
            <OrderHistoryNotFound />
          )
        ) : (
          <SkeletonHistory />
        )}
        {}
      </div>
      <MenuBar isActive="Riwayat" />
    </div>
  );
}
