import { useState, useEffect } from "react";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
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

  const insertProduct = () => {
    axios
      .post("https://65688c3b9927836bd97507c0.mockapi.io/name", inputData)
      .then((response) => {
        if (response.status == 201) {
          alert("Sukses menambahkan data!");
          setRefresh(refresh + 1);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [refresh, setRefresh] = useState(0);

  const getProducts = async () => {
    axios
      .get("https://65688c3b9927836bd97507c0.mockapi.io/name")
      .then((response) => {
        setData(response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.error("Error fatching data:", error);
      });
  };

  useEffect(() => {
    getProducts();
    const result = data.filter((item) => {
      return item.name.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }, [refresh]);

  const handleSelected = ({ selectedRows }) => {
    console.log(selectedRows);
  };

  const handleDelete = (val) => {
    const newData = data.filter((item) => item.id !== val);
    setFilter(newData);
  };

  const columns = [
    { name: "No", selector: (row) => row.id, sortable: true },
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "Product Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Product Freshness",
      selector: (row) => row.freshness,
      sortable: true,
    },
    { name: "Product Price", selector: (row) => row.price, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn btn-danger" onClick={() => handleDelete(row.id)}>
          <FaTrash />
        </button>
      ),
    },
  ];

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
                    category: inputData.category,
                    freshness: inputData.freshness,
                  });
                }}
                value={inputData.pname}
              ></InputField>
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
                  value="Brand New"
                  onChange={(e) => {
                    setInputData({
                      name: inputData.name,
                      price: inputData.price,
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
                      category: inputData.category,
                      freshness: e.target.value,
                    });
                  }}
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
                name="pprice"
                onChange={(e) => {
                  setInputData({
                    name: inputData.name,
                    price: e.target.value,
                    category: inputData.category,
                    freshness: inputData.freshness,
                  });
                }}
                value={inputData.pprice}
              ></WrapInputField>
            </div>
            <Buttons
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
              type="button"
              onClick={insertProduct}
            >
              Create Product
            </Buttons>
          </div>
          <div>
            <DataTable
              columns={columns}
              data={filter}
              onSelectedRowsChange={handleSelected}
              fixedHeaderScrollHeight="300px"
              selectableRows
              selectableRowsHighlight
              highlightOnHover
              fixedHeader
              pagination
              subHeader
              subHeaderComponent={
                <InputGroup className="mb-3 w-25">
                  <Form.Control
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              }
            ></DataTable>
          </div>
        </div>
      </form>
      <br></br>
    </div>
  );
}
