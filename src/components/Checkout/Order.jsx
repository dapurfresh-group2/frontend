import React from "react";
import ProductCard from "@Components/ProductCard";
import kangkungImage from "@Assets/images/product/kangkung.png";

export default function Order() {
  return (
    <div
      className="py-4 border-bottom border-2"
      style={{
        marginBottom: "144px",
      }}
    >
      <div className="d-flex justify-content-between px-3">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "19px",
            marginBottom: "15px",
            color: "rgba(68, 68, 68, 1)",
          }}
        >
          Pesanan
        </h1>
        <a
          className="hover-underline"
          href="/"
          style={{
            color: "rgba(106, 164, 52, 1)",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          + tambah
        </a>
      </div>
      <hr
        style={{
          borderTop: "2px dashed rgba(196, 196, 196, 1)",
          marginTop: "0px",
        }}
      />
      <div className="px-3 py-2">
        <ProductCard
          img={kangkungImage}
          name="Kangkung"
          price="Rp20.000"
          info="Ini info"
          weight="1 ikat"
        />
      </div>
    </div>
  );
}
