import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonHistory() {
  return (
    <div className="mt-3">
      <Skeleton height={74} count={5} className="mb-2" />
    </div>
  );
}
