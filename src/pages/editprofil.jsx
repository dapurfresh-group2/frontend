/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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




  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.put('http://108.137.148.110/api/v1/profile/edit', {
      name: name,
      phone: phone,
      address: address,
      image: null
    }, config)
      .then(function (response) {

        if (response.data.message === "success") {

          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Profil berhasil disimpan'
          });
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  };




  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get('http://108.137.148.110/api/v1/profile/user', config)
      .then(function (response) {
        setAvatarImgApi("https://ui-avatars.com/api/?background=random&name=" + response.data.data.name);
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
        setAddress(response.data.data.address);

      })
      .catch(function (error) {
        console.log(error);
      });
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
