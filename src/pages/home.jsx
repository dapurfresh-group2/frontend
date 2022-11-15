import React, { useEffect, useState } from "react";
import Header from "@Components/Header";
import Category from "@Components/Category";
import ProductCard from "@Components/ProductCard";
import MenuBar from "@Components/MenuBar";
import ButtonCart from "@Components/Button/ButtonCart";
import getAllProducts from "@Api/product/getAllProducts";
import getAllCategories from "@Api/product/getAllCategories";
import SkeletonCategory from "@Components/SkeletonLoading/SkeletonCategory";
import SkeletonProductList from "@Components/SkeletonLoading/SkeletonProductList";

export default function Home() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Get all categories and set it to state
      const categoriesRes = await getAllCategories();
      console.log(categoriesRes);
      if (categoriesRes.response.data.message === "failed jwt expired") {
        window.location.href = "/login";
      }
      setCategoriesData(categoriesRes.data.data);

      // Get all products and set it to state
      const productsRes = await getAllProducts();
      setProductsData(productsRes.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-3">
        {categoriesData.length > 0 ? (
          <Category data={categoriesData} />
        ) : (
          <SkeletonCategory />
        )}

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
        <div
          style={{
            marginBottom: "75px",
          }}
        >
          {productsData.length > 0 ? (
            productsData.map((product) => (
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
            <SkeletonProductList count={5} />
          )}
        </div>
      </div>

      <MenuBar isActive="Belanja" />
      <ButtonCart bottom="80px" />
    </div>
  );
}
