import React from "react";

import { NavLink } from "react-router-dom";

import ImageSection from "../Components/LandingPageComponents/ImageSection";
import FeaturesSection from "../Components/LandingPageComponents/FeaturesSection";
import HowItWorksSection from "../Components/LandingPageComponents/HowItWorksSection";

const LandingPage = () => {
  return (
    <>
      <ImageSection />
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
};

export default LandingPage;
