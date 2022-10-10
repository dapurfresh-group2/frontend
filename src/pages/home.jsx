import React from "react";
import './home.css';
import HeadLoginRegister from "../components/header/HeadLoginRegister";
import line1 from '../assets/line-1.png';
import line2 from '../assets/line-2.png';


export default function Home() {
  return (
    <div>
      <HeadLoginRegister />

      <div className="d-flex justify-content-center mt-5">
        <div className="card-masuk shadow d-flex flex-column align-items-center">

          <div className="my-2 text-masuk">Masuk</div>
          <input type="email" className="my-2 field-input" placeholder="Email" />
          <input type="password" className="my-2 field-input" placeholder="Password" />

          <div className="my-2"><button className="btn-masuk">Masuk</button></div>

          <div className="my-2">
            <img src={line1} alt="line-1" />
            <span className="px-1 text-atau">atau</span>
            <img src={line2} alt="line-2" />

          </div>

          <div className="mt-2 mb-3"><button className="btn-link-daftar">Daftar</button></div>

        </div>
      </div>
    </div>
  );
}
