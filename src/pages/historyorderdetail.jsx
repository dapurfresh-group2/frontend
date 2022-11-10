import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderWithBackButton from "@Components/Header/HeaderWithBackButton";
import CustomerDetail from "@Components/HistoryDetail/CustomerDetail";
import DeliveryDetail from "@Components/HistoryDetail/DeliveryDetail";
import OrderDetail from "@Components/HistoryDetail/OrderDetail";
import PaymentDetail from "@Components/HistoryDetail/PaymentDetail";
import Button from "@Components/HistoryDetail/Button";
import deleteModal from "@Utils/interface/deleteModal";
import GetHistoryDetail from "@Api/order/getHistoryDetail";



export default function HistoryOrderDetail() {

  const { id } = useParams();

  const [status, setStatus] = useState("proses");


  const deleteOrderHandler = () => {
    alert("Delete order called");
  };

  const cancelOnClickHandler = () => {
    deleteModal(deleteOrderHandler);
  };

  useEffect(() => {

    const FetchData = async () => {
      const historyDetailRes = await GetHistoryDetail();
      console.log(historyDetailRes);
    };
    FetchData();
  }, [id]);


  return (
    <div>
      <HeaderWithBackButton text="Detail Riwayat Pesanan" />
      <CustomerDetail status={status} />
      <DeliveryDetail />
      <OrderDetail />
      <PaymentDetail />
      <Button status={status} cancelOrderOnClick={cancelOnClickHandler} />
    </div>
  );
}
