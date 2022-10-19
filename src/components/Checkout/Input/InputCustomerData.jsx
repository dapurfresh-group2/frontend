import React from "react";

export default function InputCustomerData({
  label,
  type,
  img,
  placeholder,
  note,
  marginLeft,
  marginBottom,
}) {
  return (
    <div
      className="d-flex"
      style={{
        marginBottom: marginBottom ? marginBottom : "0px",
      }}
    >
      <img src={img} alt="icon" />
      <div
        className="d-flex flex-column w-100"
        style={{
          color: "rgba(68, 68, 68, 1)",
          marginLeft: marginLeft ? marginLeft : "8px",
        }}
      >
        <label
          htmlFor="name"
          style={{
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-100"
          style={{
            fontWeight: "600",
            fontSize: "16px",
            borderBottom: "1px solid rgba(68, 68, 68, 1)",
            paddingBottom: "6px",
            paddingTop: "2px",
            color: "rgba(68, 68, 68, 1)",
          }}
        />
        {note ? (
          <p
            style={{
              fontWeight: "500",
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            *{note}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
