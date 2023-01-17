import React from "react";

import logoAbout from "../assets/images/logo.png";

import "../assets/styles/AboutApp.css";

const AboutApp = () => {
  return (
    <div className="container wrapper-aboutapp mt-5 my-5">
      <div className="row d-flex justify-content-center align-content-center">
        <div className="col-md-6 text-center">
          <img src={logoAbout} alt="Logo" width="200" />
        </div>
        <div className="col-md-6">
          <h2 className="contentAbout">About This App</h2>
          <p className="contentParagragh">
            An application containing a simple exercise calendar, free for
            android, simple in appearance, utility and organization. It's easy
            to log sets with your history, fitness course, and BMI calculator.
            You can also turn exercise into a routine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
