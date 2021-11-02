import "./App.css";
import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Components/Header/Header"));
const RezultataiPrel = lazy(() =>
  import("./Components/Rezultatai-preliminarus/RezultataiPrel")
);
const RezultataiGal = lazy(() =>
  import("./Components/RezultataiGal/RezultataiGal")
);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Įkeliama...</h2>}>
        <Header />
        <RezultataiPrel />
        <RezultataiGal />
      </Suspense>
    </>
  );
}

export default App;
