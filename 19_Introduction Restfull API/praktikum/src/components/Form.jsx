import { useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Button from "./Button";
import Modal from "./Modal";
import "../assets/Form.css";

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    freshness: "",
  });
  const options = [
    { label: "Food", value: "Food" },
    { label: "Clothing", value: "Clothing" },
    { label: "Else", value: "Else" },
  ];

  const insertProduct = () => {
    axios
      .post("https://6521a2daa4199548356d6f22.mockapi.io/products", inputData)
      .then((response) => {
        if (response.status == 201) {
          alert("Sukses menambahkan data!");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container w-50">
      <form className="row " autoComplete="off">
        <div className="container">
          <div className="row p-3">
            <div className="mb-3">
              <InputField
                label="Product Name"
                type="text"
                name="name"
                onChange={(e) => {
                  setInputData({
                    name: e.target.value,
                    price: inputData.price,
                    image: inputData.image,
                    category: inputData.category,
                    freshness: inputData.freshness,
                  });
                }}
                value={inputData.pname}
              ></InputField>

              {errors.pname && (
                <span style={{ color: "red" }}>{errors.pname}</span>
              )}
            </div>

            <div className="row">
              <div className="w-auto mb-3">
                <label className="form-label">Product Category</label>
                <select
                  className="form-select required"
                  name="category"
                  onChange={(e) => {
                    setInputData({
                      name: inputData.name,
                      price: inputData.price,
                      image: inputData.image,
                      category: e.target.value,
                      freshness: inputData.freshness,
                    });
                  }}
                >
                  <option name="pcategory" value="" disabled selected>
                    Choose...
                  </option>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                {errors.pcategory && (
                  <span style={{ color: "red" }}>{errors.pcategory}</span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <InputField
                label="Image of Product"
                name="image"
                type="file"
                onChange={(e) => {
                  setInputData({
                    name: inputData.name,
                    price: inputData.price,
                    image: e.target.value,
                    category: inputData.category,
                    freshness: inputData.freshness,
                  });
                }}
              ></InputField>
              {errors.pimage && (
                <span style={{ color: "red" }}>{errors.pimage}</span>
              )}
            </div>
            <div className="row">
              <div className="w-auto mb-4">
                <label className="form-label">Product Freshness</label>
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Brand New"
                  onChange={(e) => {
                    setInputData({
                      name: inputData.name,
                      price: inputData.price,
                      image: inputData.image,
                      category: inputData.category,
                      freshness: e.target.value,
                    });
                  }}
                />
                &nbsp;Brand New
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Second Hand"
                  onChange={(e) => {
                    setInputData({
                      name: inputData.name,
                      price: inputData.price,
                      image: inputData.image,
                      category: inputData.category,
                      freshness: e.target.value,
                    });
                  }}
                />
                &nbsp;Second Hand
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Refurbished"
                  onChange={(e) => {
                    setInputData({
                      name: inputData.name,
                      price: inputData.price,
                      image: inputData.image,
                      category: inputData.category,
                      freshness: e.target.value,
                    });
                  }}
                />
                &nbsp;Refurbished
                {errors.freshness && (
                  <span style={{ color: "red" }}>{errors.freshness}</span>
                )}
              </div>
            </div>
            <div className="row">
              <TextArea label="Additional Description"></TextArea>
            </div>
            <div className="row mb-4">
              <WrapInputField
                label="Product Price"
                type="text"
                span="$"
                name="pprice"
                onChange={(e) => {
                  setInputData({
                    name: inputData.name,
                    price: e.target.value,
                    image: inputData.image,
                    category: inputData.category,
                    freshness: inputData.freshness,
                  });
                }}
                value={inputData.pprice}
              ></WrapInputField>
              {errors.pprice && (
                <span style={{ color: "red" }}>{errors.pprice}</span>
              )}
            </div>
            <Button
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
              type="button"
              onClick={insertProduct}
            >
              Create Product
            </Button>
          </div>
        </div>
      </form>
      <br></br>
    </div>
  );
}
