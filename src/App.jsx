import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@Routes";
import Layout from "@Components/Layout";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      const floatingCartButton = document.getElementById("floatingCart");
      floatingCartButton.setAttribute("open", false);
      setTimeout(() => {
        floatingCartButton.setAttribute("open", true);
      }, 500);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
