import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./page/CreateProduct";
import LandingPage from "./page/LandingPage";
import DetailProduct from "./page/DetailProduct";

// const initialValue = [
//   {
//     id: crypto.randomUUID(),
//     pname: "Product 1",
//     pcategory: "Food",
//     freshness: "Brand New",
//     pprice: 10000,
//   },
// ];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
