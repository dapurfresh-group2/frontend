import React from "react";

import logoIcon from "@Assets/icons/logo-header.svg";
import helpIcon from "@Assets/icons/help-icon.svg";
import Search from "@Components/Search";
import closeIcon from "@Assets/icons/close-icon.svg";
import questionIcon from "@Assets/icons/question-icon.svg";
import helpClickModal from "@Utils/interface/helpClickModal"

export default function Header() {
  return (
    <div className="w-100 px-4 py-3" style={{ backgroundColor: "#6AA434" }}>
      <div className="d-flex text-white justify-content-between">
        <div className="d-flex">
          <img src={logoIcon} alt="logo" />
          <p className="my-auto ms-1" style={{ fontSize: "22px" }}>
            dapurfresh
          </p>
        </div>
        <img style={{cursor: "pointer"}} src={helpIcon} alt="help" onClick={() => helpClickModal(questionIcon, closeIcon)} />
      </div>
      <Search />
    </div>
  );
}
