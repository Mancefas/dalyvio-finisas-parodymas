import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";

import LandingPage from "./Pages/LandingPage";

const GifKazluRuda = lazy(() => import("./Pages/GIF-Kazlu-Ruda"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/gif-kazlu-ruda"
          element={
            <Suspense
              fallback={
                <div>
                  <FontAwesomeIcon icon={faBiking} size={"2x"} />
                </div>
              }
            >
              <GifKazluRuda />
            </Suspense>
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
