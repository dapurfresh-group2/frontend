// Ubah ke styles folder
import "../assets/styles/loginRegister.css";
import React from "react";
import { useState } from "react";

import HeadLoginRegister from "@Components/Header/HeadLoginRegister";
import line1 from "@Assets/images/loginregister/line-1.png";
import line2 from "@Assets/images/loginregister/line-2.png";
import FormLoginRegister from "@Components/LoginRegister";

import Swal from 'sweetalert2';
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://108.137.148.110/api/v1/auth/login', {
      username: username,
      password: password
    })
      .then(function (response) {

        if (response.data.message === "success") {
          localStorage.setItem("token", response.data.token);
          window.location = "/";
        } else if (response.data === "incorrect password") {
          Swal.fire({
            icon: 'error',
            title: 'Password Salah'

          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });


    setUsername("");
    setPassword("");
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
            <div className="my-2 text-masuk">Masuk</div>

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
                Masuk
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
              <a href="/register">
                <button className="btn-link-daftar">Daftar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
