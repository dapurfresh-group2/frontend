import React from "react";
import HeaderTextWithBackButton from "@Components/Header/HeaderWithBackButton";
import CustomerData from "@Components/Checkout/CustomerData";
import CustomerNote from "@Components/Checkout/CustomerNote";
import Info from "@Components/Checkout/Info";
import Order from "@Components/Checkout/Order";
import Payment from "@Components/Checkout/Payment";

export default function Checkout() {
  return (
    <div>
      <HeaderTextWithBackButton text="CheckOut" />
      <CustomerData />
      <CustomerNote />
      <Info />
      <Order />
      <Payment />
    </div>
  );
}
