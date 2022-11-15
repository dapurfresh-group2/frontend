import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCategory() {
  return (
    <div>
      <h1
        className="mt-3 mb-3"
        style={{ fontSize: "16px", fontWeight: "700", color: "#444444" }}
      >
        Kategori Produk
      </h1>
      <Skeleton
        className="flex"
        width={100}
        height={100}
        count={3}
        containerClassName="d-flex"
        style={{
            marginRight: "10px"
        }}
      />
    </div>
  );
}
