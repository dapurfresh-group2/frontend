import React, { useState } from "react";

import "@Assets/styles/searchpage.css";
import arrowButton from "@Assets/icons/arrow-icon.svg";
import iconSearch from "@Assets/icons/search-icon.svg";
import resetInputImg from "@Assets/icons/cancel-icon.svg";

import ProductCard from "@Components/ProductCard";
import ButtonCart from "@Components/Button/ButtonCart";
import NotFoundProduct from "@Components/NotFound/NotFoundProduct";
import SkeletonProductList from "@Components/SkeletonLoading/SkeletonProductList";

import searchProduct from "@Api/product/searchProduct";

import data from "@Data/favoriteProduct";


function PageSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = async (event) => {
    setIsLoading(true);
    setInputSearch(event.target.value);
    const res = await searchProduct(event.target.value);
    if (res.data?.data) {
      setProducts(res.data.data);
      setIsLoading(false);
    } else if (res.response.data.message === "product not found") {
      setProducts([]);
      setIsLoading(false);
    }
  };

  const onClickSearchProduct = async (name) => {
    setIsLoading(true);
    setInputSearch(name);
    const res = await searchProduct(name);
    if (res.data?.data) {
      setProducts(res.data.data);
      setIsLoading(false);
    } else if (res.response.data.message === "product not found") {
      setProducts([]);
      setIsLoading(false);
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
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                info={product.info}
                weight={product.weight}
                discount={product.discount}
                img={`http://108.137.148.110${product.image}`}
              />
            ))
          ) : isLoading ? (
            <SkeletonProductList />
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
      <ButtonCart />
    </div>
  );
}

export default PageSearch;
