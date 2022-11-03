import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonProfileName() {
  return (
    <div>
      <Skeleton height={22} count={1} className="mb-2" />
    </div>
  );
}
