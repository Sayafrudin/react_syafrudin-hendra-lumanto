import { useState, useEffect } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import axios from "axios";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Buttons from "./Button";
import "../assets/Form.css";

export default function FormProducts() {
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

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
  });

  const { name, category, freshness, price, id } = formData;
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name, category, freshness, price)) {
      axios
        .post("https://65688c3b9927836bd97507c0.mockapi.io/name", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({
            name: "",
            category: "",
            freshness: "",
            price: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (deleteID) => {
    axios
      .delete(`https://65688c3b9927836bd97507c0.mockapi.io/name/${deleteID}`)
      .then((res) => {
        console.log("DELETE RECORD::::", res);
        setRefresh(refresh + 1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://65688c3b9927836bd97507c0.mockapi.io/name")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    // console.log(data);
  }, [refresh]);

  return (
    <div className="container w-50">
      <form className="row " autoComplete="off" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row p-3">
            <div className="mb-3">
              <InputField
                label="Product Name"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
              ></InputField>
            </div>

            <div className="row">
              <div className="w-auto mb-3">
                <label className="form-label">Product Category</label>
                <select
                  className="form-select required"
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={category}
                >
                  <option name="category" value="" disabled selected>
                    Choose...
                  </option>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <InputField
                label="Image of Product"
                name="image"
                type="file"
              ></InputField>
            </div>
            <div className="row">
              <div className="w-auto mb-4">
                <label className="form-label">Product Freshness</label>
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  onChange={handleChange}
                  value="Brand New"
                />
                &nbsp;Brand New
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  onChange={handleChange}
                  value="Second Hand"
                />
                &nbsp;Second Hand
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  onChange={handleChange}
                  value="Refurbished"
                />
                &nbsp;Refurbished
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
                name="price"
                id="price"
                onChange={handleChange}
                value={price}
              ></WrapInputField>
            </div>
            <Buttons
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
              type="submit"
            >
              Create Product
            </Buttons>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Product Freshness</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.freshness}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
      <br></br>
    </div>
  );
}
