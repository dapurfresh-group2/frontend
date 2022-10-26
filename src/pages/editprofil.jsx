/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import apiPutProfile from "@Api/auth/apiPutProfile";
import ApiProfile from "@Api/auth/apiProfile";
import Swal from 'sweetalert2';

import "@Assets/styles/profil.css";
import InputEditProfil from "@Components/Profil/inputeditprofil";
import HeaderTextWithBackButton from "@Components/Header/HeaderWithBackButton";
import cameraImg from "@Assets/images/profil/camera.png";

function EditProfil() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarImgApi, setAvatarImgApi] = useState("");




  const handleSubmit = async (event) => {
    event.preventDefault();
    const editProfileRes = await apiPutProfile(name, phone, address);
    if (editProfileRes.data.message === "success") {

      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Profil berhasil disimpan',
        showConfirmButton: false,
      });
    }


  };

  useEffect(() => {
    const fetchData = async () => {
      const profileRes = await ApiProfile();
      setAvatarImgApi("https://ui-avatars.com/api/?background=random&name=" + profileRes.data.data.name);
      setName(profileRes.data.data.name);
      setPhone(profileRes.data.data.phone);
      setAddress(profileRes.data.data.address);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderTextWithBackButton text="Edit Profil" />
      <div className="extra-container-blank"></div>

      <form onSubmit={handleSubmit}>
        <div className="container-avatar d-flex justify-content-center align-items-center">
          <label for="file-input">
            <div className="avatar-relative cursor-pointer">
              <img src={avatarImgApi} alt="Avatar" className="avatar-edit" />
              <div className="camera-absolute cursor-pointer">
                <img src={cameraImg} alt="Camera" className="camera-edit" />
              </div>
            </div>
            <input
              id="file-input"
              type="file"
              // value={selectedFile}
              onChange={(event) => setSelectedFile(event.target.files[0])}
            />
          </label>
        </div>

        <div className="d-flex flex-column align-items-center my-2">
          <InputEditProfil
            type="text"
            className="input-edit-profil px-3 mt-3"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <InputEditProfil
            type="number"
            className="input-edit-profil input-number px-3 mt-3"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />

          <InputEditProfil
            type="text"
            className="input-edit-profil px-3 mt-3"
            placeholder="Address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />

          <button className="btn-save-profil mt-5">Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfil;
