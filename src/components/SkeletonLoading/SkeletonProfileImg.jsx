import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonProfileImg() {
  return (
    <div>
      <Skeleton height={70} width={70} circle={true} className="mb-2" />
    </div>
  );
}
