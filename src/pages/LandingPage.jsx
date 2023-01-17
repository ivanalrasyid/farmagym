import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutApp from "../components/AboutApp";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutApp />
      <Features />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
