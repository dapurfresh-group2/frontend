import React, { useState, useEffect } from "react";

import "@Assets/styles/profil.css";
import arrowProfilSmall from "@Assets/icons/arrow-profil-small.png";
import arrowProfilBig from "@Assets/icons/arrow-profil-big.png";
import vectorSyarat from "@Assets/images/profil/vector-syarat.png";
import vectorPrivacy from "@Assets/images/profil/vector-privacy.png";
import vectorTentang from "@Assets/images/profil/vector-tentang.png";

import HeaderWithText from "@Components/Header/HeaderWithText";
import MenuBar from "@Components/MenuBar";
import SkeletonProfileImg from "@Components/SkeletonLoading/SkeletonProfileImg";
import SkeletonProfileName from "@Components/SkeletonLoading/SkeletonProfileName";

import getProfile from "@Api/profile/getProfile";

import logoutModal from "@Utils/interface/logoutModal";

function Profile() {
  const [profilData, setProfilData] = useState([]);
  const [avatarImgApi, setAvatarImgApi] = useState("");

  function logout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  useEffect(() => {
    const fetchData = async () => {
      const profileRes = await getProfile();
      setProfilData(profileRes.data.data);
      setAvatarImgApi(
        profileRes.data.data.image
          ? "http://108.137.148.110" + profileRes.data.data.image
          : `https://ui-avatars.com/api/?background=random&name=${profileRes.data.data.name}`
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderWithText text="Profil" />
      <div className="d-flex align-items-center mx-3 mt-3">
        <div>
          {avatarImgApi ? (
            <img src={avatarImgApi} alt="avatar" className="avatar-image" />
          ) : (
            <SkeletonProfileImg />
          )}
        </div>
        <div className="d-flex flex-column mx-3">
          {profilData.name ? (
            <div className="profil-name text-capitalize">{profilData.name}</div>
          ) : (
            <SkeletonProfileName />
          )}

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
        <button
          className="btn-logout"
          onClick={() => {
            logoutModal(logout);
          }}
        >
          Log Out
        </button>
      </div>

      <MenuBar isActive="Profil" />
    </div>
  );
}

export default Profile;
