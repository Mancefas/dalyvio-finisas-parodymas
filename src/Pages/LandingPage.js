import React from "react";

import { NavLink } from "react-router-dom";

import ImageSection from "../Components/LandingPageComponents/ImageSection";
import FeaturesSection from "../Components/LandingPageComponents/FeaturesSection";
import HowItWorksSection from "../Components/LandingPageComponents/HowItWorksSection";

const LandingPage = () => {
  return (
    <>
      <ImageSection />
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/gif-kazlu-ruda">GIF Kazlų Rūda</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
};

export default LandingPage;
