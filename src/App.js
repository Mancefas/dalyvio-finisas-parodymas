import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking } from "@fortawesome/free-solid-svg-icons";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage";
import NoPage from "./Pages/NoPage";

const GifKazluRuda = lazy(() => import("./Pages/GIF-Kazlu-Ruda"));

function App() {
  return (
    <>
      <Header />
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
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
