import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Category({ data }) {
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
        {data.length > 0
          ? data.map((category) => (
              <SplideSlide key={category.id}>
                <a href="/categories">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      position: "relative",
                      borderRadius: "5px",
                      cursor: "pointer",
                      backgroundImage: `linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(0, 0, 0, 0.6)), url(http://108.137.148.110${category.image})`,
                      backgroundSize: "100px",
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
                      {category.name}
                    </p>
                  </div>
                </a>
              </SplideSlide>
            ))
          : ""}
      </Splide>
    </div>
  );
}
