import { useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Button from "./Button";
import "../assets/Form.css";

export default function Form() {
  const [errors, setErrors] = useState("");
  // const [productName, setProductName] = useState("");
  const [array, setArray] = useState([]);
  const [inputData, setInputData] = useState({
    pname: "",
    pprice: "",
    pcategory: "",
    freshness: "",
  });
  const options = [
    { label: "Food", value: "Food" },
    { label: "Clothing", value: "Clothing" },
    { label: "Else", value: "Else" },
  ];

  /* Validasi ketika klik Button Submit
  // const handleChange = (e) => {
  //   const { product_name, value } = e.target;
  //   setProductName({ ...productName, [product_name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = {};

  //   if (!productName.product_name.trim()) {
  //     validationErrors.product_name = "aaaa";
  //   } else {
  //     validationErrors.product_name = "asdasd";
  //   }

  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     alert("Form Submitted successfully");
  //   }
  // };
  */

  function data(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  const { pname, pprice, pcategory, freshness } = inputData;
  function addInputData() {
    setArray([...array, { pname, pprice, pcategory, freshness }]);
    setInputData({ pname: "", pprice: "", pcategory: "", freshness: "" });
  }

  // //Validasi ketika Input
  // const handleProductName = (e) => {
  //   const value = e.target.value;
  //   setProductName(value);

  //   if (value.length === 0) {
  //     setErrors("Product Name tidak boleh kosong");
  //   } else if (value.length > 10) {
  //     setErrors("Product Name tidak boleh melebihi 10 karakter");
  //   } else {
  //     setErrors("");
  //   }
  // };

  return (
    <div className="container w-50">
      <form className="row " autoComplete="off" /*onSubmit={handleSubmit}*/>
        <div className="container">
          <div className="row p-3">
            <InputField
              label="Product Name"
              type="text"
              name="pname"
              value={inputData.pname}
              // onChange={handleChange}
              onChange={data}
            ></InputField>
            {/* {errors.product_name && <span>{errors.product_name}</span>} */}
            <span style={{ color: "red" }}>{errors}</span>

            <div className="row">
              {/* <SelectInput
                label="Product Category"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                optionLabel={dataSelected.map((opt) => (
                  <option>{opt}</option>
                ))}
              ></SelectInput> */}
              <div className="w-auto mb-4">
                <label className="form-label">Product Category</label>
                <select
                  onChange={data}
                  className="form-select"
                  name="pcategory"
                >
                  <option type="radio" name="freshness" disabled selected>
                    Choose...
                  </option>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <InputField label="Image of Product" type="file"></InputField>
            <div className="row">
              {/* <RadioInput
                label="Product Freshness"
                value1="Brand New"
                value2="Second Hand"
                value3="Refurbished"
              ></RadioInput> */}
              <div className="w-auto mb-4">
                <label className="form-label">Product Category</label>
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Brand New"
                  onChange={data}
                />
                &nbsp;Brand New
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Second Hand"
                  onChange={data}
                />
                &nbsp;Second Hand
                <br></br>
                <input
                  type="radio"
                  name="freshness"
                  value="Refurbished"
                  onChange={data}
                />
                &nbsp;Refurbished
              </div>
            </div>
            <div className="row">
              <TextArea label="Additional Description"></TextArea>
            </div>
            <div className="row">
              <WrapInputField
                label="Product Price"
                type="number"
                span="$"
                name="pprice"
                value={inputData.pprice}
                onChange={data}
              ></WrapInputField>
            </div>
            <Button
              label="Create Product"
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
              type="button"
              onClick={addInputData}
            ></Button>
          </div>
        </div>
      </form>
      <br></br>
      <div className="">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {array &&
              array.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i++}</td>
                    <td>{item.pname}</td>
                    <td>{item.pcategory}</td>
                    <td>{item.freshness}</td>
                    <td>{item.pprice}</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        <BsFillPencilFill
                          style={{ fontSize: "1.2rem", color: "white" }}
                        ></BsFillPencilFill>
                      </button>
                      &nbsp;&nbsp;
                      <button type="button" class="btn btn-danger">
                        <BsFillTrash3Fill
                          style={{ fontSize: "1.2rem", color: "white" }}
                        ></BsFillTrash3Fill>
                      </button>
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
