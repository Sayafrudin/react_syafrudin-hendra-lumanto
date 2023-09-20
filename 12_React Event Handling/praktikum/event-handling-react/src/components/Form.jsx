import { useState } from "react";
import React from "react";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Button from "./Button";
import "../assets/Form.css";

export default function Form() {
  const [errors, setErrors] = useState("");
  const [productName, setProductName] = useState("");
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

  //Validasi ketika Input
  const handleProductName = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.length === 0) {
      setErrors("Product Name tidak boleh kosong");
    } else if (value.length > 10) {
      setErrors("Product Name tidak boleh melebihi 10 karakter");
    } else {
      setErrors("");
    }
  };

  return (
    <div className="container w-50">
      <form className="row " autoComplete="off" /*onSubmit={handleSubmit}*/>
        <div className="container">
          <div className="row p-3">
            <InputField
              label="Product Name"
              type="text"
              value={productName}
              // onChange={handleChange}
              onChange={handleProductName}
            ></InputField>
            {/* {errors.product_name && <span>{errors.product_name}</span>} */}
            <span style={{ color: "red" }}>{errors}</span>

            <div className="row">
              <SelectInput
                label="Product Category"
                value1="Food"
                value2="Clothing"
                value3="Else"
              ></SelectInput>
            </div>
            <InputField label="Image of Product" type="file"></InputField>
            <div className="row">
              <RadioInput
                label="Product Freshness"
                value1="Brand New"
                value2="Second Hand"
                value3="Refurbished"
              ></RadioInput>
            </div>
            <div className="row">
              <TextArea label="Additional Description"></TextArea>
            </div>
            <div className="row">
              <WrapInputField
                label="Product Price"
                type="number"
                span="$"
              ></WrapInputField>
            </div>
            <Button
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
            >
              Create Product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
