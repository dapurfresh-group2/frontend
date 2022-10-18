import React from "react";
import HeaderBgWhite from "@Components/Header/HeaderBgWhite";
import ProductCard from "@Components/ProductCard";
import kangkungImage from "@Assets/images/product/kangkung.png";

function ProdukTerpopuler() {
    return (
        <div>
            <HeaderBgWhite ahref="/" title="Produk Terpopuler" />
            <div className="extra-container-blank"></div>

            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>

            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>


        </div>
    );
}

export default ProdukTerpopuler;