import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./page/CreateProduct";
import LandingPage from "./page/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
