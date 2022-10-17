import React from "react";
import arrowBack from "@Assets/icons/arrow.png";

function HeaderBgWhite({ ahref, title }) {
    return (
        <div className="container-header-bg-white d-flex align-items-center px-3 py-3">
            <div><a href={ahref}><img src={arrowBack} alt="Arrow back" /></a></div>
            <div className="title-header mx-3">{title}</div>
        </div>
    );
}

export default HeaderBgWhite;