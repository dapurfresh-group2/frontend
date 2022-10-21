import React from "react";
import Header from "@Components/Header";
import Category from "@Components/Category";
import ProductCard from "@Components/ProductCard";
import kangkungImage from "@Assets/images/product/kangkung.png";
import MenuBar from "@Components/MenuBar";
import ButtonCart from "@Components/Button/ButtonCart";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-3">
        <Category />
        <div className="d-flex justify-content-between align-content-center mt-5">
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#444444",
              marginBottom: "15px",
            }}
          >
            Produk Terpopuler
          </h1>
          <a
            href="/popularproducts"
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "rgba(84, 127, 30, 1)",
            }}
          >
            Lihat Semua
          </a>
        </div>
        <ProductCard img={kangkungImage} />
      </div>

      <MenuBar isActive="Belanja" />
      <ButtonCart totalBill="4.680" quantity="1" bottom="80px" />
    </div>
  );
}
