// Ubah ke styles folder
import "@Assets/styles/loginRegister.css";
import React, { useEffect } from "react";
import { useState } from "react";

import HeadLoginRegister from "@Components/Header/HeadLoginRegister";
import line1 from "@Assets/images/loginregister/line-1.png";
import line2 from "@Assets/images/loginregister/line-2.png";
import FormLoginRegister from "@Components/LoginRegister";

import Swal from "sweetalert2";
import axios from "axios";
import login from "@Api/auth/login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getProduct = async () => {

    const res = await axios.get("http://108.137.148.110/api/v1/products", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo5LCJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIiwibmFtZSI6InRlc3QiLCJwaG9uZSI6IjA5MjEyMiIsInBhc3N3b3JkIjoiJDJiJDEwJFFXRnVMM1oxYTc1VDBxWkFLRHR4OU9RSGhkSVpwZHhOU0xkZnBKWXBOSTZTN2ZKa1FvZUxpIiwiaW1hZ2UiOm51bGwsImFkZHJlc3MiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMTAtMjVUMDM6NTU6NDIuMDEwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMjVUMDM6NTU6NDIuMDEwWiJ9LCJpYXQiOjE2NjY2NzAxNTgsImV4cCI6MTY2NzI3NDk1OH0.2UmjejsC1YS19TVkQIjWdK5uegh5CK-k4JI--uqhQH0",
      },
    });
    console.log(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(username, password);
    console.log(response);
    if (response.data?.message === "success") {
      localStorage.setItem("token", response.data.token);
      window.location = "/";
    } else if (response?.data === "incorrect password") {
      Swal.fire({
        icon: "error",
        title: "Password Salah",
        width: 310,
        showConfirmButton: false,
      });
    } else if (response.response.data.message === "failed, username not registered") {
      Swal.fire({
        icon: "error",
        title: "Username Tidak Ditemukan",
        width: 310,
        showConfirmButton: false,
      });
    }
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
