import React from "react";
import { useState } from "react";
import "../assets/styles/searchpage.css";
import arrowButton from "@Assets/icons/arrow.png";
import iconSearch from "@Assets/icons/ic-search.png";
import ProductCard from "@Components/ProductCard";
import resetInputImg from "@Assets/icons/reset-input.png";
import searchProduct from "@Api/auth/searchProduct";
import NotFoundProduct from "@Components/NotFound/NotFoundProduct";
import data from "@Data/favoriteProduct";

function PageSearch() {
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = async (event) => {
    setInputSearch(event.target.value);
    const res = await searchProduct(event.target.value);
    if (res.data?.data) {
      setProducts(res.data.data);
    } else if (res.response.data.message === "product not found") {
      setProducts([]);
    }
  };

  const onClickSearchProduct = async (name) => {
    setInputSearch(name);
    const res = await searchProduct(name);
    if (res.data?.data) {
      setProducts(res.data.data);
    } else if (res.response.data.message === "product not found") {
      setProducts([]);
    }
  };

  const resetInput = () => {
    setInputSearch("");
  };

  return (
    <div>
      <div className="d-flex align-items-center mx-2 my-2">
        <div>
          <a href="/">
            <img src={arrowButton} alt="arrow button" />
          </a>
        </div>
        <div className="container-search d-flex align-items-center mx-2">
          <div className="cursor-pointer ms-3 me-2">
            <img src={iconSearch} alt="icon search" />
          </div>

          <div className="d-flex align-items-center">
            <input
              id="search"
              type="text"
              className="input-search"
              placeholder="Cari sayur,bumbu dapur, lauk pauk..."
              value={inputSearch}
              onChange={handleChange}
            />

            {inputSearch && (
              <div onClick={resetInput} className="cursor-pointer">
                <img src={resetInputImg} alt="reset input" />
              </div>
            )}
          </div>
        </div>
      </div>

      {inputSearch ? (
        <div className="px-3 mt-3">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                name={product.name}
                price={product.price}
                info={product.info}
                weight={product.weight}
                img={`http://108.137.148.110${product.image}`}
              />
            ))
          ) : (
            <NotFoundProduct />
          )}
        </div>
      ) : (
        <div>
          <div className="pencarian-produk-terpopuler mx-3 mt-4 mb-3">
            Pencarian Produk Terpopuler
          </div>

          <div className="d-flex flex-wrap mx-3">
            {data.map((product) => (
              <button
                className="tag-produk-terpopuler px-3 py-2 mx-1 my-2"
                onClick={() => {
                  onClickSearchProduct(product);
                }}
              >
                {product}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PageSearch;
