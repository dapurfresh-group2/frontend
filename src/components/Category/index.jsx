import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import bumbuImage from "@Assets/images/category/bumbu.png";
import buahImage from "@Assets/images/category/buah.png";
import sayurImage from "@Assets/images/category/sayur.png";
import sembakoImage from "@Assets/images/category/sembako.png";

export default function Category() {
  return (
    <div>
      <h1
        className="mt-3 mb-3"
        style={{ fontSize: "16px", fontWeight: "700", color: "#444444" }}
      >
        Kategori Produk
      </h1>
      <Splide
        options={{
          gap: 10,
          drag: "free",
          height: "100px",
          autoWidth: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
              borderRadius: "5px",
              backgroundImage: `linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(0, 0, 0, 0.6)), url(${bumbuImage})`,
            }}
          >
            <p
              className="text-white"
              style={{
                position: "absolute",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "5px",
                bottom: "0px",
                left: "10px",
              }}
            >
              Bumbu
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
              borderRadius: "5px",
              backgroundImage: `linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(0, 0, 0, 0.6)), url(${sayurImage})`,
            }}
          >
            <p
              className="text-white"
              style={{
                position: "absolute",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "5px",
                bottom: "0px",
                left: "10px",
              }}
            >
              Sayur & Kacang
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
              borderRadius: "5px",
              backgroundImage: `linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(0, 0, 0, 0.6)), url(${sembakoImage})`,
            }}
          >
            <p
              className="text-white"
              style={{
                position: "absolute",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "5px",
                bottom: "0px",
                left: "10px",
              }}
            >
              Sembako
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
              borderRadius: "5px",
              backgroundImage: `linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(0, 0, 0, 0.6)), url(${buahImage})`,
            }}
          >
            <p
              className="text-white"
              style={{
                position: "absolute",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "5px",
                bottom: "0px",
                left: "10px",
              }}
            >
              Buah
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
