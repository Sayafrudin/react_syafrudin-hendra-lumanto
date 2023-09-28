import { useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Button from "./Button";
import Modal from "./Modal";
import "../assets/Form.css";

export default function Form() {
  const [errors, setErrors] = useState({});
  const [array, setArray] = useState([]);
  const [inputData, setInputData] = useState({
    pname: "",
    pprice: "",
    pimage: "",
    pcategory: "",
    freshness: "",
  });
  const options = [
    { label: "Food", value: "Food" },
    { label: "Clothing", value: "Clothing" },
    { label: "Else", value: "Else" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const { pname, pprice, pimage, pcategory, freshness } = inputData;
  const addInputData = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!/^[\s\t\r]*\S+/.test(inputData.pname)) {
      validationErrors.pname = "Product Name tidak boleh koosng";
    } else if (!/^[a-zA-Z ]{3,10}$/.test(inputData.pname)) {
      validationErrors.pname =
        "Hanya boleh Text, minimal 3 karakter & tidak boleh lebih dari 10 karakter";
    }

    if (!/^[\s\t\r]*\S+/.test(inputData.pcategory)) {
      validationErrors.pcategory = "Pilih Product Category";
    } else {
    }

    if (!inputData.pimage) {
      validationErrors.pimage = "Product Image tidak boleh kosong";
    } else if (!/(jpe?g|png)$/i.test(inputData.pimage)) {
      validationErrors.pimage = "Hanya Format .png, .jpg ,.jpeg";
    } else {
    }

    if (!/^[\s\t\r]*\S+/.test(inputData.freshness)) {
      validationErrors.freshness = "Pilih Product Freshness";
    } else {
    }

    if (!/^[\s\t\r]*\S+/.test(inputData.pprice)) {
      validationErrors.pprice = "Product Price tidak boleh koosng";
    } else if (!/^[0-9]{3,}$/.test(inputData.pprice)) {
      validationErrors.pprice = "Hanya boleh angka & minimal 3 karakter";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setArray([
        ...array,
        {
          id: crypto.randomUUID(),
          pname,
          pprice,
          pimage,
          pcategory,
          freshness,
        },
      ]);
      setInputData({
        pname: "",
        pprice: "",
        pimage: "",
        pcategory: "",
        freshness: "",
      });
    }
  };

  function deleteData(i) {
    console.log(i, "ini row yang akan dihapus");
    const total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  console.log(array);

  return (
    <div className="container w-50">
      <form className="row " autoComplete="off">
        <div className="container">
          <div className="row p-3">
            <div className="mb-3">
              <InputField
                label="Product Name"
                type="text"
                name="pname"
                onChange={handleChange}
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
                  name="pcategory"
                  onChange={handleChange}
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
                name="pimage"
                type="file"
                onChange={handleChange}
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
                  onChange={handleChange}
                />
                &nbsp;Brand New
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Second Hand"
                  onChange={handleChange}
                />
                &nbsp;Second Hand
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Refurbished"
                  onChange={handleChange}
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
                onChange={handleChange}
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
              type="submit"
              onClick={addInputData}
            >
              Create Product
            </Button>
          </div>
        </div>
      </form>
      <br></br>
      <div>
        <h2>List Product</h2>
        <table className="table table-hover ">
          <thead className="table-danger ">
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Image</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {array &&
              array.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Link to={`/product/${item.id}`}>{item.id}</Link>
                    </td>
                    <td>{item.pname}</td>
                    <td>{item.pcategory}</td>
                    <td>{<img src={item.pimage} alt="preview image" />}</td>
                    <td>{item.freshness}</td>
                    <td>Rp. {item.pprice}</td>
                    <td>
                      <Button
                        type="button"
                        style={{
                          backgroundColor: "green",
                          border: "none",
                          color: "white",
                        }}
                      >
                        <BsFillPencilFill
                          style={{ fontSize: "1.2rem", color: "white" }}
                        ></BsFillPencilFill>
                      </Button>
                    </td>
                    <td>
                      <Button
                        type="button"
                        toggle="modal"
                        target="#delete"
                        style={{
                          backgroundColor: "#bd4141",
                          border: "none",
                          color: "white",
                        }}
                      >
                        <BsFillTrash3Fill
                          style={{ fontSize: "1.2rem", color: "white" }}
                        ></BsFillTrash3Fill>
                      </Button>
                      <Modal
                        className="modal fade"
                        id="delete"
                        title="Delete Data"
                        btnClose="Back"
                        btnSuccess="Hapus"
                        onClick={() => deleteData(i)}
                      >
                        Apakah ingin menghapus item{" "}
                        <strong>{item.pname}</strong>
                      </Modal>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
