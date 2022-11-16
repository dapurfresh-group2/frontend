import React from "react";
import arrowIcon from "@Assets/icons/arrow-icon.svg";
import { useNavigate } from "react-router-dom";

export default function HeaderTextWithBackButton({ text, backPath }) {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex bg-white border-bottom px-3 py-3 fixed-top w-100 mx-auto"
      style={{ maxWidth: "360px" }}
    >
      {backPath ? (
        <a
          href={backPath}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={arrowIcon}
            alt="back button icon"
            style={{
              cursor: "pointer",
            }}
          />
        </a>
      ) : (
        <img
          src={arrowIcon}
          onClick={() => navigate(-1)}
          alt="back button icon"
          style={{
            cursor: "pointer",
          }}
        />
      )}

      <h1
        className="my-auto"
        style={{ fontSize: "16px", fontWeight: "600", marginLeft: "15px" }}
      >
        {text}
      </h1>
    </div>
  );
}
