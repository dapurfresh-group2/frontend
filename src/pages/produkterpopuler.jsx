import React from "react";
import ProductCard from "@Components/ProductCard";
import kangkungImage from "@Assets/images/product/kangkung.png";
import HeaderTextWithBackButton from "@Components/Header/HeaderWithBackButton";

function ProdukTerpopuler() {
  return (
    <div>
      <HeaderTextWithBackButton text="Produk Terpopuler" />
      <div className="extra-container-blank"></div>

      <div className="px-3 mt-3">
        <ProductCard
          img={kangkungImage}
          name="Kangkung"
          price="Rp20.000"
          info="Ini info"
          weight="1 ikat"
        />
      </div>
      <div className="px-3 mt-3">
        <ProductCard
          img={kangkungImage}
          name="Kangkung"
          price="Rp20.000"
          info="Ini info"
          weight="1 ikat"
        />
      </div>
      <div className="px-3 mt-3">
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

export default ProdukTerpopuler;
