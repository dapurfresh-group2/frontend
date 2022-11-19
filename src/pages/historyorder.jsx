import React from "react";
import { useEffect, useState } from "react";
import getHistoryOrder from "@Api/order/getHistoryOrder";
import convertDate from "@Utils/logic/convertTime";
import HistoryOrderCard from "@Components/HistoryOrderCard";
import MenuBar from "@Components/MenuBar";
import HeaderWithText from "@Components/Header/HeaderWithText";
import OrderHistoryNotFound from "@Components/NotFound/OrderHistoryNotFound";
import SkeletonHistory from "@Components/SkeletonLoading/SkeletonHistory";
import getHistoryProductTitle from "@Utils/logic/getHistoryProductTitle";
import getPreviousDay from "../utils/logic/getPreviousDay";

export default function HistoryOrder() {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHistoryOrder();
      const data = res.data.data;
      let history = {
        now: [],
        yesterday: [],
        other: [],
      };

      data.forEach((item) => {
        if (
          new Date(item.createdAt).toDateString() === new Date().toDateString()
        ) {
          history.now.push(item);
        } else if (
          new Date(item.createdAt).toDateString() ===
          getPreviousDay(1).toDateString()
        ) {
          history.yesterday.push(item);
        } else {
          history.other.push(item);
        }
      });

      setHistoryData(history);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderWithText text="Riwayat Pesanan" />
      <div className="mx-3" style={{ marginBottom: "85px" }}>
        {historyData?.now ? (
          historyData.now.length === 0 &&
          historyData.yesterday.length === 0 &&
          historyData.other.length === 0 ? (
            <OrderHistoryNotFound />
          ) : null
        ) : (
          <SkeletonHistory />
        )}

        {historyData?.now.length > 0 ? (
          <>
            <h2
              className="my-3"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Hari Ini
            </h2>
            {historyData.now.map((history) => (
              <a
                key={history.id}
                style={{ textDecoration: "none" }}
                href={`/historyorder/${history.id}`}
              >
                <HistoryOrderCard
                  key={history.id}
                  name={getHistoryProductTitle(history.cart.cart_items)}
                  date={convertDate(history.createdAt)}
                  status={history.status.toLowerCase()}
                />
              </a>
            ))}
          </>
        ) : null}

        {historyData?.yesterday.length > 0 ? (
          <>
            <h2
              className="my-3 mt-4"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Kemarin
            </h2>
            {historyData.yesterday.map((history) => (
              <a
                key={history.id}
                style={{ textDecoration: "none" }}
                href={`/historyorder/${history.id}`}
              >
                <HistoryOrderCard
                  key={history.id}
                  name={getHistoryProductTitle(history.cart.cart_items)}
                  date={convertDate(history.createdAt)}
                  status={history.status.toLowerCase()}
                />
              </a>
            ))}
          </>
        ) : null}

        {historyData?.other.length > 0 ? (
          <>
            <h2
              className="my-3 mt-4"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Minggu Ini
            </h2>
            {historyData.other.map((history) => (
              <a
                key={history.id}
                style={{ textDecoration: "none" }}
                href={`/historyorder/${history.id}`}
              >
                <HistoryOrderCard
                  key={history.id}
                  name={getHistoryProductTitle(history.cart.cart_items)}
                  date={convertDate(history.createdAt)}
                  status={history.status.toLowerCase()}
                />
              </a>
            ))}
          </>
        ) : null}
      </div>
      <MenuBar isActive="Riwayat" />
    </div>
  );
}
