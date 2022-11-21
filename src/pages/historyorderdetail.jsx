import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import HeaderWithBackButton from "@Components/Header/HeaderWithBackButton";
import CustomerDetail from "@Components/HistoryDetail/CustomerDetail";
import DeliveryDetail from "@Components/HistoryDetail/DeliveryDetail";
import OrderDetail from "@Components/HistoryDetail/OrderDetail";
import PaymentDetail from "@Components/HistoryDetail/PaymentDetail";
import Button from "@Components/HistoryDetail/Button";

import getHistoryDetail from "@Api/order/getHistoryDetail";
import cancelOrder from "@Api/order/cancelOrder";

import deleteModal from "@Utils/interface/deleteModal";

export default function HistoryOrderDetail() {
  const { id } = useParams();
  const [historyOrderData, setHistoryOrderData] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    status: "",
    total_product_price: "",
    shipping_price: "",
    total_price: "",
    createdAt: "",
    updatedAt: "",
    cart: {
      id: "",
      status: "",
      createdAt: "",
      updatedAt: "",
      UserId: "",
      cart_items: [],
    },
  });
  const [status, setStatus] = useState();

  const deleteOrderHandler = async () => {
    const processDeleteOrder = await cancelOrder(id);
    if (processDeleteOrder.data.message === "success") {
      setStatus(processDeleteOrder.data.data.status);
      Swal.fire({
        icon: "success",
        title: "Pesanan Dibatalkan",
        text: "Pesanan anda telah dibatalkan",
        width: 310,
        showConfirmButton: false,
      });
    }
  };

  const cancelOnClickHandler = () => {
    deleteModal(deleteOrderHandler);
  };

  useEffect(() => {
    const FetchData = async () => {
      const historyDetailRes = await getHistoryDetail(id);
      setHistoryOrderData(historyDetailRes.data.data);
    };
    FetchData();
  }, [id, status]);

  return (
    <div>
      <HeaderWithBackButton
        text="Detail Riwayat Pesanan"
        backPath="/historyorder"
      />
      <CustomerDetail
        status={historyOrderData.status}
        name={historyOrderData.name}
        date={historyOrderData.createdAt}
      />
      <DeliveryDetail address={historyOrderData.address} />
      <OrderDetail
        note={historyOrderData.note}
        orderDetailProduct={historyOrderData.cart.cart_items}
      />
      <PaymentDetail
        subTotal={historyOrderData.total_price}
        deliveryFee={historyOrderData.shipping_price}
        total={
          parseInt(historyOrderData.total_price) +
          parseInt(historyOrderData.shipping_price)
        }
      />
      <Button
        status={historyOrderData.status}
        cancelOrderOnClick={cancelOnClickHandler}
      />
    </div>
  );
}
