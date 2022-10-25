import React from "react";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column bg-light">
      <div
        className="w-100 bg-white mx-auto h-100 min-vh-100"
        style={{ maxWidth: "360px" }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
