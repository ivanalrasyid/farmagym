import React from "react";

import feature from "../assets/images/features.png";
import "../assets/styles/Features.css";

const Features = () => {
  return (
    <>
      <div className="wrapper-feature">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-content-center">
            <div className="col-md-4 text-center text-white mt-2">
              <div className="features-1">
                <h4 className="pt-4">Healty Course Class</h4>
                <p className="feat-1">
                  You can access sports without needing to leave the house
                </p>
              </div>
              <div className="features-2 mt-5">
                <h4 className="pt-4">Activity Management</h4>
                <p className="feat-1">
                  You can manage your exercise schedule wherever and whenever
                  you want
                </p>
              </div>
              <div className="features-3 mt-5">
                <h4 className="pt-4">Fitness Article</h4>
                <p className="feat-1">
                  You can see the latest news and articles related to fitness
                  and maintaining health
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src={feature} alt="Gambar Feature" className="feature" />
            </div>
            <div className="col-md-4 text-center text-white">
              <div className="features-1">
                <h4 className="pt-4">Food Shop</h4>
                <p className="feat-1">
                  The place for healthy food that can keep your body fit
                </p>
              </div>
              <div className="features-2 mt-5">
                <h4 className="pt-4">GYM Places</h4>
                <p className="feat-1">
                  A place where you can see our gym branch in your nearest area
                </p>
              </div>
              <div className="features-3 mt-5">
                <h4 className="pt-4">BMI Calculator</h4>
                <p className="feat-1">
                  You can calculate how ideal your body is
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
