import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/gif-kazlu-ruda">GIF Kazlų Rūda</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
