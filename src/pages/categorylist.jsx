import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@Assets/styles/listkategori.css";
import ProductCard from "@Components/ProductCard";
import arrowButton from "@Assets/icons/arrow-icon.svg";
import SearchCategory from "@Components/Search/SearchCategory";
import ButtonCart from "@Components/Button/ButtonCart";
import getProductsByCategory from "@Api/product/getProductsByCategory";
import getAllCategories from "@Api/product/getAllCategories";
import NotFoundProduct from "@Components/NotFound/NotFoundProduct";
import SkeletonProductList from "@Components/SkeletonLoading/SkeletonProductList";

function ListKategori() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [filteredProductsData, setFilteredProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const styleRegular = "menu-kategori cursor-pointer pb-2";
  const styleActive = "menu-kategori-active cursor-pointer pb-2";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Get query parameters id
      const searchQueryId = searchParams.get("id");

      // Fetch products data
      const productsRes = await getProductsByCategory(
        searchQueryId || activeCategoryId
      );
      setProductsData(productsRes.data.data);
      setFilteredProductsData(productsRes.data.data);
      setActiveCategoryId(searchQueryId || 1);
      setIsLoading(false);

      // Fetch categories data
      const categoriesRes = await getAllCategories();
      setCategories(categoriesRes.data.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search]);

  return (
    <div>
      <div
        className="header-list-kategori"
        style={{
          zIndex: 99,
        }}
      >
        <div className="d-flex align-items-center align-content-center mx-2 my-3">
          <div>
            <a href="/">
              <img src={arrowButton} alt="arrow button" />
            </a>
          </div>
          <div className="ms-2 w-100">
            <SearchCategory
              onChange={(e) => {
                setFilteredProductsData(
                  productsData.filter((product) =>
                    product.name.toLowerCase().includes(e.target.value)
                  )
                );
              }}
            />
          </div>
        </div>

        <div className="mx-3 mt-4">
          <Splide
            options={{
              gap: 10,
              drag: "free",
              autoWidth: true,
              pagination: false,
              arrows: true,
            }}
            aria-label="My Favorite Images"
          >
            {categories.map((category) => (
              <SplideSlide key={category.id}>
                <div
                  className={
                    // eslint-disable-next-line eqeqeq
                    activeCategoryId == category.id ? styleActive : styleRegular
                  }
                  onClick={() => {
                    setSearchParams({ id: category.id });
                    setActiveCategoryId(category.id);
                  }}
                >
                  {category.name}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <div className="extra-blank"></div>

      <div className="px-3 mt-3">
        {!isLoading ? (
          filteredProductsData.length > 0 ? (
            filteredProductsData.map((product) => (
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
          ) : (
            <NotFoundProduct />
          )
        ) : (
          <SkeletonProductList />
        )}
        <ButtonCart />
      </div>
    </div>
  );
}

export default ListKategori;
