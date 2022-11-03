import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonTransactionHistoryList() {
  return (
    <div>
      <Skeleton height={73} count={3} className="mb-2" />
    </div>
  );
}
