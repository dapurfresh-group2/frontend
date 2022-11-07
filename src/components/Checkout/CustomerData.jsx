import React from "react";
import InputCustomerData from "./Input/InputCustomerData";
import homeInputIcon from "@Assets/icons/home-input-icon.svg";
import nameInputIcon from "@Assets/icons/name-input-icon.svg";
import phoneInputIcon from "@Assets/icons/phone-input-icon.svg";

export default function CustomerData({
  name,
  phone,
  address,
  nameOnChange,
  phoneOnChange,
  addressOnChange,
}) {
  return (
    <div
      className="p-3 border-bottom border-2"
      style={{
        marginTop: "52px",
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <InputCustomerData
        type="text"
        label="Nama Lengkap"
        img={nameInputIcon}
        placeholder="Masukkan nama lengkapmu"
        value={name}
        onChange={nameOnChange}
        marginBottom="20px"
      />
      <InputCustomerData
        type="number"
        label="Nomor Telepon"
        img={phoneInputIcon}
        placeholder="Masukkan nomor teleponmu"
        value={phone}
        onChange={phoneOnChange}
        note="Nomor yang dapat dihubungi"
        marginLeft="10px"
        marginBottom="20px"
      />
      <InputCustomerData
        type="text"
        label="Alamat Tujuan"
        img={homeInputIcon}
        placeholder="Masukkan alamatmu"
        value={address}
        onChange={addressOnChange}
        marginBottom="10px"
      />
    </div>
  );
}
