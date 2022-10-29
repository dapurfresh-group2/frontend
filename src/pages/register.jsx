// Ubah ke styles folder
import "@Assets/styles/loginRegister.css";
import React from "react";
import { useState } from "react";

import HeadLoginRegister from "@Components/Header/HeadLoginRegister";
import FormLoginRegister from "@Components/LoginRegister";
import line1 from "@Assets/images/loginregister/line-1.png";
import line2 from "@Assets/images/loginregister/line-2.png";

import Swal from "sweetalert2";
import register from "@Api/auth/register";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await register(name, phone, username, password);
    if (res.data?.message === "register success") {
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
        text: "Silahkan masuk dengan menggunakan username dan password",
        width: 310,
        showConfirmButton: false,
      });
      setName("");
      setPhone("");
      setUsername("");
      setPassword("");
    } else if (res.response.data.message === "failed username has been used") {
      Swal.fire({
        icon: "error",
        title: "Username Sudah Dipakai",
        text: "Silahkan ubah usernamemu",
        width: 310,
        showConfirmButton: false,
      });
      setUsername("");
    }
  };

  return (
    <div>
      <HeadLoginRegister />

      <div className="d-flex justify-content-center mt-5">
        <div className="card-masuk shadow ">
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center"
          >
            <div className="my-2 text-masuk">Daftar</div>

            <FormLoginRegister
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <FormLoginRegister
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />

            <FormLoginRegister
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <FormLoginRegister
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <div className="my-2">
              <button type="submit" className="btn-masuk">
                Daftar
              </button>
            </div>
          </form>

          <div className="d-flex flex-column align-items-center">
            <div className="my-2">
              <img src={line1} alt="line-1" />
              <span className="px-1 text-atau">atau</span>
              <img src={line2} alt="line-2" />
            </div>

            <div className="mt-2 mb-3">
              <a href="/login">
                <button className="btn-link-daftar">Masuk</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
