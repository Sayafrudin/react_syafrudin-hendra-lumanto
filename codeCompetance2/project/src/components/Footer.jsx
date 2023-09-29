import React from "react";
import {
  BsInstagram,
  BsTwitter,
  BsTiktok,
  BsGithub,
  BsPinMapFill,
  BsTelephoneFill,
  BsFillEnvelopeAtFill,
} from "react-icons/bs";
import saeLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3f2305"
          fillOpacity={1}
          d="M0,160L80,160C160,160,320,160,480,176C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
      <div className="container-fluid footer-content d-flex justify-content-between pb-5">
        <div className="col-3 footer-left d-flex flex-column justify-content-center align-items-center w-25">
          <a>
            <img src={saeLogo} className="mb-2 footer-logo" />
          </a>
          <p className="footer-company-name">SAE Tribe © 2023</p>
        </div>
        <div className="col-4 footer-center">
          <div className="d-flex flex-row align-items-center footer-icon align-items-start mb-3">
            <BsPinMapFill id="logoInfo" />
            <p className="my-0 ms-3">
              <span>Jl. Manukan Lor 8D/11 Surabaya, Indonesia</span>
            </p>
          </div>
          <div className="d-flex flex-row align-items-center mb-3">
            <BsTelephoneFill id="logoInfo" />
            <p className="my-0 ms-3">+62 85607352356</p>
          </div>
          <div className="d-flex flex-row align-items-center link">
            <BsFillEnvelopeAtFill id="logoInfo" />
            <p className="my-0 ms-3">
              <a href="mailto:support@company.com">support@saetribe.id</a>
            </p>
          </div>
        </div>
        <div className="col-5 footer-right">
          <p className="footer-company-about">
            SAE adalah nama toko online yang dikelola 3 orang yang berisinial S,
            A, dan E. Jadi itu sejarah dibalik nama SAE itu sendiri dan arti SAE
            sendiri dalam bahasa Jawa artinya "Bagus"
          </p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/sayafrudinhl/"
              target="_blank"
              className="me-4"
            >
              <BsInstagram id="logoSocial" />
            </a>
            <a
              href="https://twitter.com/justpinkycu"
              target="_blank"
              className="me-4"
            >
              <BsTwitter id="logoSocial" />
            </a>
            <a
              href="https://www.tiktok.com/@sayafrudinhl"
              target="_blank"
              className="me-4"
            >
              <BsTiktok id="logoSocial" />
            </a>
            <a href="https://github.com/Sayafrudin/" target="_blank">
              <BsGithub id="logoSocial" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
