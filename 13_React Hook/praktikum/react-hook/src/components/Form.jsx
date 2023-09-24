import { useState } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import WrapInputField from "./WrapInputField";
import Button from "./Button";
import Modal from "./Modal";
import "../assets/Form.css";

export default function Form() {
  const [errors, setErrors] = useState("");
  const [productName, setProductName] = useState("");
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

  function data(e) {
    const value = e.target.value;
    setProductName(value);

    //Prodcut Name Validation
    if (value.length === 0) {
      setErrors("Product Name tidak boleh kosong");
    } else if (value.length > 10) {
      setErrors("Product Name tidak boleh melebihi 10 karakter");
    } else {
      setErrors("");
    }
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const { pname, pprice, pcategory, freshness } = inputData;
  function addInputData() {
    setArray([...array, { pname, pprice, pcategory, freshness }]);
    setInputData({ pname: "", pprice: "", pcategory: "", freshness: "" });
  }

  function deleteData(i) {
    console.log(i, "ini row yang akan dihapus");
    const total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  return (
    <div className="container col-12">
      <div className="row">
        <div className="col-6">
          {/* Form */}
          <form className="row " autoComplete="off">
            <div className="container">
              <div className="row p-3">
                <InputField
                  label="Product Name"
                  type="text"
                  name="pname"
                  value={inputData.pname}
                  onChange={data}
                ></InputField>

                <span style={{ color: "red" }}>{errors}</span>

                <div className="row">
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
                  style={{
                    backgroundColor: "#bd4141",
                    border: "none",
                    color: "white",
                  }}
                  type="button"
                  onClick={addInputData}
                >
                  Create Product
                </Button>
              </div>
            </div>
          </form>
        </div>
        {/* Form */}

        {/* Tabel */}
        <div className="col-6">
          <br></br>
          <div>
            <h2>List Product</h2>
            <table className="table table-hover ">
              <thead className="table-danger ">
                <tr>
                  <th>No</th>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
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
                        <td>{i + 1}</td>
                        <td>{crypto.randomUUID()}</td>
                        <td>{item.pname}</td>
                        <td>{item.pcategory}</td>
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
                            Apakah ingin menghapus item {item.pname}
                          </Modal>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        {/* Tabel */}
      </div>
    </div>
  );
}
