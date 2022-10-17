import React from "react";
import HistoryOrderCard from "@Components/HistoryOrderCard";
import MenuBar from "@Components/MenuBar";
import HeaderWithText from "@Components/Header/HeaderWithText";
import OrderHistoryNotFound from "@Components/NotFound/OrderHistoryNotFound";

export default function historyorder() {
  const data = [
    {
      name: "Kangkung",
      date: "9 September 2019, 07:50",
      status: "proses",
    },
    {
      name: "Bayam",
      date: "9 September 2019, 07:50",
      status: "batal",
    },
    {
      name: "Susu putih, Garam, Gula Pasir",
      date: "9 September 2019, 07:50",
      status: "proses",
    },
  ];
  return (
    <div>
      <HeaderWithText text="Riwayat Pesanan" />
      <div className="mx-3 my-2">
        {data.length > 0 ? (
          <>
            <h2
              className="my-3"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Hari Ini
            </h2>
            {data.map((history) => (
              <a style={{ textDecoration: "none" }} href="/historyorder/123">
                <HistoryOrderCard
                  name={history.name}
                  date={history.date}
                  status={history.status}
                />
              </a>
            ))}
          </>
        ) : (
          <OrderHistoryNotFound />
        )}
      </div>
      <MenuBar isActive="Riwayat" />
    </div>
  );
}
