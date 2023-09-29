import React from "react";
import Navbar from "../components/Navbar";
import WelcomePage from "../components/WelcomePage";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <ContactUs />
      <Footer />
    </>
  );
}
