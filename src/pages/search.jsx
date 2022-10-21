import React from "react";
import { useState } from "react";
import "../assets/styles/searchpage.css";
import arrowButton from "../assets/icons/arrow.png";
import iconSearch from "../assets/icons/ic-search.png";
import ProductCard from "../components/ProductCard";
import PencarianProduk from "../components/PencarianProduk";
import kangkungImage from "@Assets/images/product/kangkung.png";
import resetInputImg from "../assets/icons/reset-input.png";

function PageSearch() {
  const [inputSearch, setInputSearch] = useState();

  function handleChange(event) {
    setInputSearch(event.target.value);
  }

  function testSearch() {
    alert(inputSearch);
  }

  function resetInput() {
    setInputSearch("");
  }

  return (
    <div>
      <div className="d-flex align-items-center mx-2 my-2">
        <div>
          <a href="/">
            <img src={arrowButton} alt="arrow button" />
          </a>
        </div>
        <div className="container-search d-flex align-items-center mx-2">
          <div className="cursor-pointer ms-3 me-2" onClick={testSearch}>
            <img src={iconSearch} alt="icon search" />
          </div>

          <div className="d-flex align-items-center">
            <input
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
          <ProductCard img={kangkungImage} />
        </div>
      ) : (
        <PencarianProduk />
      )}
    </div>
  );
}

export default PageSearch;
