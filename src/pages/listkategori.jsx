import React from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "@Components/ProductCard";
import kangkungImage from "@Assets/images/product/kangkung.png";
import arrowButton from "../assets/icons/arrow.png";
import cariImage from "../assets/icons/cari-img.png";
import "../assets/styles/listkategori.css";

function ListKategori() {
    const [namaKategori, setNamaKategori] = useState();

    const styleRegular = "menu-kategori cursor-pointer pb-2";
    const styleActive = "menu-kategori-active cursor-pointer pb-2";

    return (
        <div>

            <div className="header-list-kategori">
                <div className="d-flex align-items-center mx-2 my-2">
                    <div><a href="/"><img src={arrowButton} alt="arrow button" /></a></div>
                    <div className="mx-2"><a href="/search"><img src={cariImage} alt="Cari" /></a></div>
                </div>

                <div className="mx-3 mt-4">
                    <Splide
                        options={{
                            gap: 10,
                            drag: "free",
                            height: "50px",
                            autoWidth: true,
                            pagination: false,
                        }}
                        aria-label="My Favorite Images"
                    >

                        <SplideSlide>
                            <div className={namaKategori === "bumbu" ? styleActive : styleRegular} onClick={() => { setNamaKategori("bumbu"); }} >Bumbu</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "sayur" ? styleActive : styleRegular} onClick={() => { setNamaKategori("sayur"); }} >Sayur</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "kacang" ? styleActive : styleRegular} onClick={() => { setNamaKategori("kacang"); }} >Kacang</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "sembako" ? styleActive : styleRegular} onClick={() => { setNamaKategori("sembako"); }} >Sembako</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "buah" ? styleActive : styleRegular} onClick={() => { setNamaKategori("buah"); }} >Buah</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "daging" ? styleActive : styleRegular} onClick={() => { setNamaKategori("daging"); }} >Daging</div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className={namaKategori === "lainnya" ? styleActive : styleRegular} onClick={() => { setNamaKategori("lainnya"); }} >Lainnya</div>
                        </SplideSlide>




                    </Splide>
                </div>
            </div>

            <div className="extra-blank"></div>

            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>
            <div className="px-3 mt-3"><ProductCard img={kangkungImage} /></div>



        </div>
    );
}

export default ListKategori;