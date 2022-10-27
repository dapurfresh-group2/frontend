import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonProductList() {
  return (
    <div>
      <Skeleton height={122} count={5} className="mb-2" />
    </div>
  );
}
