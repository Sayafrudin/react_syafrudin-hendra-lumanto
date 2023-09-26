import { BsFillInboxesFill } from "react-icons/bs";
import { article } from "../Article";
import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const [text, setText] = useState("en");

  const changeText = () => {
    setText(text === "en" ? "id" : "en");
  };

  // Random Number
  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * max - min);
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1, 1000));
    // console.log(num);
  };
  // Random Number

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-center mb-3">
        <BsFillInboxesFill
          style={{ fontSize: "5rem", color: "#bd4141" }}
        ></BsFillInboxesFill>
      </div>
      <div className="d-flex justify-content-center mb-2">
        <h1>{article.title[text]}</h1>
      </div>
      <div className="d-flex justify-content-center text-center">
        <p>{article.description[text]}</p>
      </div>
      <div className="d-flex justify-content-center gap-md-3">
        <Button
          style={{
            backgroundColor: "#bd4141",
            border: "none",
            color: "white",
          }}
          onClick={changeText}
        >
          Change Language {text}
        </Button>
        <Button
          style={{
            backgroundColor: "grey",
            border: "none",
            color: "white",
          }}
          onClick={handleClick}
        >
          Random Number : {num}
        </Button>
        {/* <button className="btn btn-secondary" onClick={handleClick}></button> */}
      </div>
    </div>
  );
};

export default Header;
