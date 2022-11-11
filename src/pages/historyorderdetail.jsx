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
import cancelOrder from "@Api/order/cancelOrder";
import Swal from "sweetalert2";




export default function HistoryOrderDetail() {

  const { id } = useParams();

  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [note, setNote] = useState();
  const [ongkosKirim, setOngkosKirim] = useState();
  const [total, setTotal] = useState();
  const [orderDetailProduct, setOrderDetailProduct] = useState();
  const [totalPayment, setTotalPayment] = useState();
  const [waktuDiantar, setWaktuDiantar] = useState();


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
    console.log(processDeleteOrder);
  };

  const cancelOnClickHandler = () => {
    deleteModal(deleteOrderHandler);
  };

  useEffect(() => {

    const FetchData = async () => {
      const historyDetailRes = await GetHistoryDetail(id);
      setStatus(historyDetailRes.data.data.status);
      setName(historyDetailRes.data.data.name);
      setAddress(historyDetailRes.data.data.address);
      setNote(historyDetailRes.data.data.note);
      setOngkosKirim(historyDetailRes.data.data.shipping_price);
      setTotal(historyDetailRes.data.data.total_price);
      setOrderDetailProduct(historyDetailRes.data.data.cart.cart_items);
      setTotalPayment(parseInt(historyDetailRes.data.data.total_price) + parseInt(historyDetailRes.data.data.shipping_price));
      setWaktuDiantar(historyDetailRes.data.data.createdAt);

      console.log(historyDetailRes.data.data);
    };
    FetchData();
  }, [id, status]);


  return (
    <div>
      <HeaderWithBackButton text="Detail Riwayat Pesanan" />
      <CustomerDetail status={status} name={name} waktuDiantar={waktuDiantar} />
      <DeliveryDetail address={address} />
      <OrderDetail note={note} orderDetailProduct={orderDetailProduct} />
      <PaymentDetail subTotal={total} ongkosKirim={ongkosKirim} total={totalPayment} />
      <Button status={status} cancelOrderOnClick={cancelOnClickHandler} />
    </div>
  );
}
