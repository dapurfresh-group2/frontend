import React from "react";

function InputEditProfil({ type, className, placeholder, value, onChange }) {
    return (
        <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} required />
    );
}

export default InputEditProfil;