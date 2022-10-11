// Ubah ke styles folder
import "../assets/styles/loginRegister.css";
import React from "react";
import { useState } from 'react';

import HeadLoginRegister from "@Components/Header/HeadLoginRegister";
import line1 from "@Assets/images/loginregister/line-1.png";
import line2 from "@Assets/images/loginregister/line-2.png";





export default function Register() {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name} Phone: ${phone} Username: ${username} Password: ${password}`);
        setName("");
        setPhone("");
        setUsername("");
        setPassword("");

    }

    return (
        <div>
            <HeadLoginRegister />

            <div className="d-flex justify-content-center mt-5">
                <div className="card-masuk shadow ">

                    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                        <div className="my-2 text-masuk">Daftar</div>

                        <input
                            type="text"
                            className="my-2 field-input"
                            placeholder="Name"
                            value={name}
                            onChange={(event) => { setName(event.target.value); }}
                            required
                        />

                        <input
                            type="number"
                            className="my-2 field-input input-number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value); }}
                            required
                        />

                        <input
                            type="text"
                            className="my-2 field-input"
                            placeholder="Username"
                            value={username}
                            onChange={(event) => { setUsername(event.target.value); }}
                            required
                        />

                        <input
                            type="password"
                            className="my-2 field-input"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value); }}
                            required
                        />

                        <div className="my-2">
                            <button type="submit" className="btn-masuk">Daftar</button>
                        </div>

                    </form>

                    <div className="d-flex flex-column align-items-center">
                        <div className="my-2">
                            <img src={line1} alt="line-1" />
                            <span className="px-1 text-atau">atau</span>
                            <img src={line2} alt="line-2" />
                        </div>

                        <div className="mt-2 mb-3">
                            <a href="/login"><button className="btn-link-daftar">Masuk</button></a>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}
