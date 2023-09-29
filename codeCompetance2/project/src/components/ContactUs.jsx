import React from "react";
import Input from "./Input";
import { useState } from "react";
import Paragraph from "./Paragraph";
import "../assets/styles.css";
import Button from "./Button";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "First Name : " +
        firstName +
        "\n" +
        "Last Name : " +
        lastName +
        "\n" +
        "Email : " +
        email +
        "\n" +
        "Message : " +
        desc
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setDesc("");
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffc26f"
          fillOpacity={1}
          d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,208C672,235,768,213,864,176C960,139,1056,85,1152,96C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="container-fluid d-flex contact justify-content-around">
        <div
          className="col-6 d-flex justify-content-center flex-column align-items-start w-25"
          id="text"
        >
          <Paragraph id="contact-us">Contact Us</Paragraph>
          <Paragraph id="contact-us-desc">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department gmail you'd like to contact below.
          </Paragraph>
        </div>
        <div className="col-6 m-0" id="contact-us-form">
          <form id="form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <Input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                >
                  First Name
                </Input>
              </div>
              <div className="col-6 mb-3">
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                >
                  Last Name
                </Input>
              </div>
              <div className="col-12 mb-3">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                >
                  Email Address
                </Input>
              </div>
              <div className="col-12 mb-3 contact-input">
                <label className="form-label">What can we help you with?</label>
                <textarea
                  className="form-control"
                  style={{ height: 100 }}
                  id="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  name="desc"
                />
              </div>
              <div className="col-6">
                <Button type="submit" id="submit">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffc26f"
          fillOpacity={1}
          d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,192C672,171,768,149,864,160C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
}
