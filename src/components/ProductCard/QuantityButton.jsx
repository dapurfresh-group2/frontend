import React from "react";
import minIcon from "@Assets/icons/min-icon.svg";
import plusIcon from "@Assets/icons/plus-icon.svg";

export default function QuantityButton({
  quantity,
  onClickMinHandler,
  onClickPlusHandler,
}) {
  return (
    <div>
      <div className="d-flex">
        <div
          className="bg-white"
          style={{
            boxShadow: "1px 2px 5px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: "5px",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={onClickMinHandler}
        >
          <img
            src={minIcon}
            style={{
              margin: "14px 7px",
            }}
            alt="min-icon"
          />
        </div>
        <p
          style={{
            width: "15px",
            margin: "auto 15px",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {quantity}
        </p>
        <div
          style={{
            boxShadow: "1px 2px 5px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: "5px",
            backgroundColor: "rgba(106, 164, 52, 1)",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={onClickPlusHandler}
        >
          <img
            src={plusIcon}
            style={{
              margin: "6.5px",
            }}
            className="text-center"
            alt="plus-icon"
          />
        </div>
      </div>
    </div>
  );
}
