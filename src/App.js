import "./App.css";
import React, { lazy, Suspense } from "react";
import RezultataiApdoroti from "./Components/Rezultatai-is-suvestu/RezultataiApdoroti";

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
      <RezultataiApdoroti />
    </>
  );
}

export default App;
