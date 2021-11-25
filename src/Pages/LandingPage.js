import React from "react";

import { NavLink } from "react-router-dom";

import ImageSection from "../Components/LandingPageComponents/ImageSection";

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
    </>
  );
};

export default LandingPage;
