import React from "react";
import HeaderWithText from "@Components/Header/HeaderWithText";
import MenuBar from "@Components/MenuBar";
import '../assets/styles/profil.css';
import avatarImg from '../assets/images/profil/avatar.png';
import arrowProfilSmall from '../assets/icons/arrow-profil-small.png';
import arrowProfilBig from '../assets/icons/arrow-profil-big.png';
import vectorSyarat from '../assets/images/profil/vector-syarat.png';
import vectorPrivacy from '../assets/images/profil/vector-privacy.png';
import vectorTentang from '../assets/images/profil/vector-tentang.png';


function Profil() {

    function Logout() {
        alert("kamu telah logout");
    }

    return (
        <div>
            <HeaderWithText text="Profil" />

            <div className="d-flex align-items-center mx-3 mt-3">

                <div><img src={avatarImg} alt="avatar" className="avatar-image" /></div>
                <div className="d-flex flex-column mx-3">
                    <div className="profil-name">Fulan</div>
                    <div><a href="/editprofil"><span className="edit-profil">Edit Profil</span> <span className="mx-2"><img src={arrowProfilSmall} alt="arow profil" /></span></a></div>
                </div>
            </div>

            <div className="d-flex align-items-center ms-3">
                <div><img src={vectorSyarat} alt="vector syarat" className="vector-icon" /></div>
                <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
                    <div className="deskription-profil-menu me-auto">Syarat Penggunaan</div>
                    <dir className="me-3"><img src={arrowProfilBig} alt="arrow big" /></dir>
                </div>
            </div>

            <div className="d-flex align-items-center ms-3">
                <div><img src={vectorPrivacy} alt="vector privacy" className="vector-icon" /></div>
                <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
                    <div className="deskription-profil-menu me-auto">Kebijakan Privasi</div>
                    <dir className="me-3"><img src={arrowProfilBig} alt="arrow big" /></dir>
                </div>
            </div>

            <div className="d-flex align-items-center ms-3">
                <div><img src={vectorTentang} alt="vector tentang" className="vector-icon" /></div>
                <div className="line-bottom d-flex align-items-center py-2 ms-3 cursor-pointer">
                    <div className="deskription-profil-menu me-auto">Tentang Kami</div>
                    <dir className="me-3"><img src={arrowProfilBig} alt="arrow big" /></dir>
                </div>
            </div>

            <div className="d-flex justify-content-center mx-3 mt-5 mb-3"><button className="btn-logout" onClick={Logout}>Log Out</button></div>

            <MenuBar isActive="Profil" />
        </div>
    );
}

export default Profil;