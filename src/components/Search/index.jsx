import React from 'react'
import searchIcon from "@Assets/icons/search-icon.svg";

export default function Search() {
  return (
    <div className="d-flex w-100 bg-white rounded-pill mt-3 px-3 py-2">
        <img src={searchIcon} alt="search" />
        <input type="text" className="ms-2 w-100" style={{"fontSize": "12px", "color": "#707585"}} placeholder="Cari sayur, bumbu dapur, lauk pauk..." />
      </div>
  )
}
