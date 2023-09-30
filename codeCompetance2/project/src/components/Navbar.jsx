import React from "react";
import Button from "../components/Button";
import saeLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
import "../assets/normalize.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg fw-semibold p-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <div>
            <a href="">
              <img src={saeLogo} alt="" />
            </a>
          </div>
          <div>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/about-us")}>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="navbar-brand2" href="#contact-us-form">
              <Button type="button"> Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
