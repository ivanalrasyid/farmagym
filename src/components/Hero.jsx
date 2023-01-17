import React from "react";
import btnGooglePlay from "../assets/images/btn_download.png";
import btnAppStore from "../assets/images/btn_appstore.png";
import mockup from "../assets/images/mockup.png";

import "../assets/styles/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container wrapper-about mt-5">
          <div className="row d-flex justify-content-center align-content-center text-center">
            <div className="col-12">
              <h2 className="content">
                Health Care Solution<br></br> App For Everyone
              </h2>
            </div>
            <div className="col-12 mt-3">
              <img src={btnAppStore} alt="App Store" width="140" />
              <img
                src={btnGooglePlay}
                alt="Google Play"
                width="149"
                className="ms-3"
              />
            </div>
          </div>
          <div className="mockupo text-center">
            <img src={mockup} alt="Mock Up" className="mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
