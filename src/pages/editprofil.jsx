import React from "react";
import { useState } from "react";
import "@Assets/styles/profil.css";
import HeaderBgWhite from "@Components/Header/HeaderBgWhite";
import InputEditProfil from "@Components/Profil/inputeditprofil";
import avatarImg from "@Assets/images/profil/avatar.png";
import cameraImg from "@Assets/images/profil/camera.png";

function EditProfil() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name} Phone: ${phone} Address: ${address}`);
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div>
      <HeaderBgWhite ahref="/profile" title="Edit Profil" />
      <div className="extra-container-blank"></div>

      <form onSubmit={handleSubmit}>
        <div className="container-avatar d-flex justify-content-center align-items-center">
          <label for="file-input">
            <div className="avatar-relative cursor-pointer">
              <img src={avatarImg} alt="Avatar" className="avatar-edit" />
              <div className="camera-absolute cursor-pointer">
                <img src={cameraImg} alt="Camera" className="camera-edit" />
              </div>
            </div>
            <input
              id="file-input"
              type="file"
              value={selectedFile}
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
