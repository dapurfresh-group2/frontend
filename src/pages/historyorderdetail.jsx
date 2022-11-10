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

  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [note, setNote] = useState();
  const [ongkosKirim, setOngkosKirim] = useState();
  const [total, setTotal] = useState();
  const [orderDetailProduct, setOrderDetailProduct] = useState();


  const deleteOrderHandler = () => {
    alert("Delete order called");
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
      setOrderDetailProduct(historyDetailRes.data.data.cart.cart_items)
      console.log(historyDetailRes.data.data);
    };
    FetchData();
  }, [id]);


  return (
    <div>
      <HeaderWithBackButton text="Detail Riwayat Pesanan" />
      <CustomerDetail status={status} name={name} />
      <DeliveryDetail address={address} />
      <OrderDetail note={note} orderDetailProduct={orderDetailProduct} />
      <PaymentDetail ongkosKirim={ongkosKirim} total={total} />
      <Button status={status} cancelOrderOnClick={cancelOnClickHandler} />
    </div>
  );
}
