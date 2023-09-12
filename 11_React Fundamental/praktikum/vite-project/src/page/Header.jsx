import { BsFillInboxesFill } from "react-icons/bs";

const Header = ({}) => {
  return (
    <>
      <div className="container p-5">
        <div className="d-flex justify-content-center mb-3">
          <BsFillInboxesFill
            style={{ fontSize: "5rem", color: "#bd4141" }}
          ></BsFillInboxesFill>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <h1>Create Product</h1>
        </div>
        <div className="d-flex text-center">
          <p>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
