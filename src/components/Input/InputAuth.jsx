import React from "react";

export default function InputAuth({ type, placeholder, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        className="my-2 field-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
