import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "@Components/ProductCard";
import HeaderTextWithBackButton from "@Components/Header/HeaderWithBackButton";
import getPopularProducts from "@Api/product/getPopularProducts";
import SkeletonProductList from "@Components/SkeletonLoading/SkeletonProductList";

function ProdukTerpopuler() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsRes = await getPopularProducts();
      setProducts(productsRes.data.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <HeaderTextWithBackButton text="Produk Terpopuler" />
      <div className="extra-container-blank"></div>

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
        ) : (
          <SkeletonProductList count={5} />
        )}
      </div>
    </div>
  );
}

export default ProdukTerpopuler;
