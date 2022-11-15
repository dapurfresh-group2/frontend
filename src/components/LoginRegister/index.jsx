import React from "react";

function FormLoginRegister({ type, placeholder, value, onChange }) {
    const cssRegular = "my-2 field-input";
    const cssNumber = "my-2 field-input input-number";

    return (
        <input
            type={type}
            className={type === "number" ? cssNumber : cssRegular}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    );
}

export default FormLoginRegister;