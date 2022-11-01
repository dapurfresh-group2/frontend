import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import HeaderWithText from "@Components/Header/HeaderWithText";
import MenuBar from "@Components/MenuBar";
import "@Assets/styles/profil.css";
import arrowProfilSmall from "@Assets/icons/arrow-profil-small.png";
import arrowProfilBig from "@Assets/icons/arrow-profil-big.png";
import vectorSyarat from "@Assets/images/profil/vector-syarat.png";
import vectorPrivacy from "@Assets/images/profil/vector-privacy.png";
import vectorTentang from "@Assets/images/profil/vector-tentang.png";
import getProfile from "@Api/profile/getProfile";

function Profile() {

  function Logout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  const [profilData, setProfilData] = useState([]);
  const [avatarImgApi, setAvatarImgApi] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const profileRes = await getProfile();
      setProfilData(profileRes.data.data);
      setAvatarImgApi(profileRes.data.data.image
        ? "http://108.137.148.110" + profileRes.data.data.image
        : `https://ui-avatars.com/api/?background=random&name=${profileRes.data.data.name}`);
    };
    fetchData();
  }, []);


  return (
    <div>
      <HeaderWithText text="Profil" />

      <div className="d-flex align-items-center mx-3 mt-3">
        <div>
          <img src={avatarImgApi} alt="avatar" className="avatar-image" />
        </div>
        <div className="d-flex flex-column mx-3">
          <div className="profil-name">{profilData.name}</div>
          <div>
            <a href="/editprofile">
              <span className="edit-profil">Edit Profil</span>{" "}
              <span className="mx-2">
                <img src={arrowProfilSmall} alt="arow profil" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center ms-3">
        <div>
          <img src={vectorSyarat} alt="vector syarat" className="vector-icon" />
        </div>
        <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
          <div className="deskription-profil-menu me-auto">
            Syarat Penggunaan
          </div>
          <dir className="me-3">
            <img src={arrowProfilBig} alt="arrow big" />
          </dir>
        </div>
      </div>

      <div className="d-flex align-items-center ms-3">
        <div>
          <img
            src={vectorPrivacy}
            alt="vector privacy"
            className="vector-icon"
          />
        </div>
        <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
          <div className="deskription-profil-menu me-auto">
            Kebijakan Privasi
          </div>
          <dir className="me-3">
            <img src={arrowProfilBig} alt="arrow big" />
          </dir>
        </div>
      </div>

      <div className="d-flex align-items-center ms-3">
        <div>
          <img
            src={vectorTentang}
            alt="vector tentang"
            className="vector-icon"
          />
        </div>
        <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
          <div className="deskription-profil-menu me-auto">Tentang Kami</div>
          <dir className="me-3">
            <img src={arrowProfilBig} alt="arrow big" />
          </dir>
        </div>
      </div>

      <div className="d-flex justify-content-center mx-3 mt-5 mb-3">
        <button className="btn-logout" onClick={Logout}>
          Log Out
        </button>
      </div>

      <MenuBar isActive="Profil" />
    </div>
  );
}

export default Profile;
