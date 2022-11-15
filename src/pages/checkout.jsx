import React from "react";
import { useState } from "react";
import HeaderTextWithBackButton from "@Components/Header/HeaderWithBackButton";
import CustomerData from "@Components/Checkout/CustomerData";
import CustomerNote from "@Components/Checkout/CustomerNote";
import Info from "@Components/Checkout/Info";
import Order from "@Components/Checkout/Order";
import Payment from "@Components/Checkout/Payment";

export default function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  return (
    <div>
      <HeaderTextWithBackButton text="CheckOut" />
      <CustomerData
        name={name}
        phone={phone}
        address={address}
        nameOnChange={(e) => setName(e.target.value)}
        phoneOnChange={(e) => setPhone(e.target.value)}
        addressOnChange={(e) => setAddress(e.target.value)}
      />
      <CustomerNote value={note} onChange={(e) => setNote(e.target.value)} />
      <Info />
      <Order />
      <Payment name={name} phone={phone} address={address} note={note} />
    </div>
  );
}
