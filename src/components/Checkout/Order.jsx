import React from "react";
import ProductCard from "@Components/ProductCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import getAllProducts from "@Api/product/getAllProducts";
import historyNotFoundIcon from "@Assets/icons/history-not-found-icon.svg";

export default function Order() {
  const [productsData, setProductsData] = useState([]);
  const cart = useSelector((state) => state.carts.cart);

  useEffect(() => {
    const fetchData = async () => {
      // Get all products and set it to state
      let cartItems = [];
      const productsRes = await getAllProducts();
      productsRes.data.data.forEach((product) => {
        cart.cart_items.forEach((cart_item) => {
          if (product.id === cart_item.productId) {
            cartItems.push(product);
          }
        });
      });
      setProductsData(cartItems);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="py-4 border-bottom border-2"
      style={
        cart.length === 0
          ? {
              marginBottom: "0px",
            }
          : {
              marginBottom: "144px",
            }
      }
    >
      <div className="d-flex justify-content-between px-3">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "19px",
            marginBottom: "15px",
            color: "rgba(68, 68, 68, 1)",
          }}
        >
          Pesanan
        </h1>
        <a
          className="hover-underline"
          href="/"
          style={{
            color: "rgba(106, 164, 52, 1)",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          + tambah
        </a>
      </div>
      <hr
        style={{
          borderTop: "2px dashed rgba(196, 196, 196, 1)",
          marginTop: "0px",
        }}
      />
      <div className="px-3 py-2">
        {cart.length === 0 ? (
          <div className="text-center">
            <img src={historyNotFoundIcon} alt="history-not-found" width={40} />
            <h2
              className="mt-4"
              style={{
                fontWeight: "500",
                fontSize: "14px",
                color: "rgba(68, 68, 68, 1)",
              }}
            >
              Pesananmu masih kosong
            </h2>
          </div>
        ) : (
          productsData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              info={product.info}
              weight={product.weight}
              img={`http://108.137.148.110${product.image}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
