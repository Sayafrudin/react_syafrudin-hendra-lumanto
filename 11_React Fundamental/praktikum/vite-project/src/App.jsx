import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Header from "./page/Header";
import Form from "./page/Form";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Form />
      </div>
    </>
  );
}

export default App;
