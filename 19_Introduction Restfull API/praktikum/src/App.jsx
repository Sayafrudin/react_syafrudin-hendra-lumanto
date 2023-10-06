import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./page/CreateProduct";
import LandingPage from "./page/LandingPage";
import DetailProduct from "./page/DetailProduct";

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
