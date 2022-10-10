import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@Routes";
import Layout from "@Components/Layout";

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
