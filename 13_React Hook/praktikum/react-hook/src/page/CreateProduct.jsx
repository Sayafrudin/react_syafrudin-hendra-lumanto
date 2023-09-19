import Navbar from "../header/Navbar";
import Form from "../components/Form";
import Header from "../header/Header";
import { useEffect } from "react";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome");
  });

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Form></Form>
    </>
  );
}
