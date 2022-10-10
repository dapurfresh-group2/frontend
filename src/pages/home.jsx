import React from "react";
import Header from "@Components/Header";
import Category from "@Components/Category";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-3">
        <Category />
      </div>
    </div>
  );
}
