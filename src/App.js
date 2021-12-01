import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LinearProgress, Box } from "@mui/material";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage";
import NoPage from "./Pages/NoPage";

const GravelRace = lazy(() => import("./Pages/Gravel-race"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/gravel-race"
          element={
            <Suspense
              fallback={
                <Box sx={{ minHeight: "72vh" }}>
                  <LinearProgress />
                </Box>
              }
            >
              <GravelRace />
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
