import React from "react";
import { useParams } from "react-router-dom";
import HeaderWithBackButton from "@Components/Header/HeaderWithBackButton";
import CustomerDetail from "@Components/HistoryDetail/CustomerDetail";
import DeliveryDetail from "@Components/HistoryDetail/DeliveryDetail";
import OrderDetail from "@Components/HistoryDetail/OrderDetail";
import PaymentDetail from "@Components/HistoryDetail/PaymentDetail";
import Button from "@Components/HistoryDetail/Button";

export default function HistoryOrderDetail() {
  const { id } = useParams();
  const status = "proses";
  return (
    <div>
      <HeaderWithBackButton text="Detail Riwayat Pesanan" />
      <CustomerDetail status={status} />
      <DeliveryDetail />
      <OrderDetail />
      <PaymentDetail />
      <Button status={status} />
    </div>
  );
}