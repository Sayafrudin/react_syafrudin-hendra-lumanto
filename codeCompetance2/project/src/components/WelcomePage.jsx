import React from "react";
import Paragraph from "./Paragraph";
import product from "../assets/product.png";

export default function WelcomePage() {
  return (
    <div className="container-fluid content mt-5 pt-4 d-flex mb-5 pb-5 justify-content-center">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <div className="text">
          <div className="container d-flex flex-column">
            <Paragraph
              style={{ margin: 0, lineHeight: "10%", textAlign: "center" }}
            >
              WELCOME '3')
            </Paragraph>
            <p style={{ textAlign: "center" }}>TO OUR SHOP</p>
            <p className="name">SAE SAE SAE!</p>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <img className="product" src={product} alt="" />
      </div>
    </div>
  );
}
