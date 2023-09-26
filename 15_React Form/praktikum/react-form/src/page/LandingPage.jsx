import image from "/image.png";
import "./landing-page.css";
import { useNavigate } from "react-router-dom";
import React from "react";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-semibold p-3"
        style={{ backgroundColor: "#bd4141" }}
      >
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="#">
            Simple Header
          </a>
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
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-disabled="true"
                  onClick={() => navigate("/create-product")}
                >
                  Create Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar Menggunakan Bootstrap */}
      {/* Modal */}
      <div className="modal fade" id="about-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">About Us</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img
                className="img-responsive mb-3"
                style={{ maxHeight: 350 }}
                src={image}
                alt="image"
              />
              <h3 className="text-center" style={{ color: "#bd4141" }}>
                Syafrudin Hendra Lumanto
              </h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div id="wrapper">
        <div id="content">
          <div id="sub-content1">
            <h1>Better Solution For Your</h1>
            <h1 id="h1-business">Business</h1>
            <p>We are team of talented designers making webistes with</p>
            <p id="p-bootstrap">Bootstrap</p>
            <a href="createAccount.html">
              <button id="get-started-button">Get started</button>
            </a>
            <a className="t-text" href="createAccount.html">
              <button id="watch-video-button">Watch video</button>
            </a>
          </div>
          <div id="sub-content2">
            <img src="image.png" />
          </div>
        </div>
        <div id="sub-content3">
          <h1>Join Our Newsletter</h1>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div id="in-a">
            <input type="text" />
            <a href="createAccount.html">
              <button id="get-started-button2">Get started</button>
            </a>
          </div>
        </div>
        <div id="bf-footer">
          <div>
            <h1>ARSHA</h1>
            <div>
              <p>A108 Adam Street United States</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
            </div>
            <br />
            <p>
              <strong>Phone: </strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email: </strong>info@example.com
            </p>
          </div>
          <div className="bf-footer">
            <h3>Useful Links</h3>
            <a href="">
              <p>Home</p>
            </a>
            <a href="">
              <p>About us</p>
            </a>
            <a href="">
              <p>Service</p>
            </a>
            <a href="">
              <p>Term of service</p>
            </a>
            <a href="">
              <p>Privacy policy</p>
            </a>
          </div>
          <div className="bf-footer">
            <h3>Our Service</h3>
            <a href="">
              <p>Web Design</p>
            </a>
            <a href="">
              <p>Web Development</p>
            </a>
            <a href="">
              <p>Product Management</p>
            </a>
            <a href="">
              <p>Marketing</p>
            </a>
            <a href="">
              <p>Graphic Design</p>
            </a>
          </div>
          <div>
            <h3>Our Social Networks</h3>
            <p>Cras fermentum odio eu feugiat lide par</p>
            <p>naso tierra videa magna derita valies</p>
            <div id="bt-social">
              <button />
              <button />
              <button />
              <button />
              <button />
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div>
          (C) Copyright <strong>Arsha.</strong> All Rights Reserved
        </div>
        <div>
          <p>
            Designed by <strong>Sayafrudin</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
