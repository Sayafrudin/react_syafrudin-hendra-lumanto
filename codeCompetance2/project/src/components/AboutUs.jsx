import React from "react";
import teamPic from "../assets/team.jpg";
import teamPic2 from "../assets/team2.jpg";
import teamPic3 from "../assets/team3.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-lg-6 d-flex">
          <div className="team">
            <img className="w-100 h-100" src={teamPic3} />
          </div>
        </div>
        <div className="col-md-12 col-lg-6 py-5 m-auto">
          <div
            className="m-auto"
            style={{ maxWidth: "500px", padding: "1rem" }}
          >
            <h1
              className="d-flex align-left pb-3 display-2"
              id="about-us-header"
            >
              Team
              <h1 className="ms-3" id="about-us-header1">
                SAE SAE
              </h1>
            </h1>
            <div className="mbr-section-text mbr-black pb-3">
              <p className="align-left display-7" id="about-us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget lectus eu ex ornare porta euismod a libero. Phasellus
                vehicula placerat enim at egestas. Aliquam suscipit felis in
                massa hendrerit tristique. In augue diam, pellentesque nec
                pulvinar in, sagittis ac nulla. Sed eu lectus vitae justo
                vehicula viverra. Aenean vel urna vitae massa consequat blandit.
                Quisque sodales sapien vitae malesuada ultricies. Curabitur
                pretium ipsum non nunc facilisis semper.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6 d-flex">
          <div
            className="m-auto"
            style={{ maxWidth: "500px", padding: "1rem" }}
          >
            <h1
              className="d-flex align-left pb-3 display-2"
              id="about-us-header"
            >
              Our
              <h1 className="ms-3" id="about-us-header1">
                Goal
              </h1>
            </h1>
            <div className="mbr-section-text mbr-black pb-3">
              <p className="align-left display-7" id="about-us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget lectus eu ex ornare porta euismod a libero. Phasellus
                vehicula placerat enim at egestas. Aliquam suscipit felis in
                massa hendrerit tristique. In augue diam, pellentesque nec
                pulvinar in, sagittis ac nulla.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 py-5 m-auto">
          <div className="team">
            <img className="w-100 h-100" src={teamPic2} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6 d-flex">
          <div className="team">
            <img className="w-100 h-100" src={teamPic} />
          </div>
        </div>
        <div className="col-md-12 col-lg-6 py-5 m-auto">
          <div
            className="m-auto"
            style={{ maxWidth: "500px", padding: "1rem" }}
          >
            <h1
              className="d-flex align-left pb-3 display-2"
              id="about-us-header"
            >
              Our
              <h1 className="ms-3" id="about-us-header1">
                Inspirations
              </h1>
            </h1>
            <div className="mbr-section-text mbr-black pb-3">
              <p className="align-left display-7" id="about-us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget lectus eu ex ornare porta euismod a libero. Phasellus
                vehicula placerat enim at egestas. Aliquam suscipit felis in
                massa hendrerit tristique. In augue diam, pellentesque nec
                pulvinar in, sagittis ac nulla. Sed eu lectus vitae justo
                vehicula viverra. Aenean vel urna vitae massa consequat blandit.
                Quisque sodales sapien vitae malesuada ultricies. Curabitur
                pretium ipsum non nunc facilisis semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
