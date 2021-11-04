import "./App.css";
import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Components/Header/Header"));
const RezultataiPrel = lazy(() =>
  import("./Components/Rezultatai/Rezultatai-preliminarus/RezultataiPrel")
);
const RezultataiApdoroti = lazy(() =>
  import("./Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdoroti")
);
const RezultataiGal = lazy(() =>
  import("./Components/Rezultatai/Rezultatai-is-kitu/RezultataiGal")
);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Įkeliama...</h2>}>
        <Header />
        <RezultataiPrel />
        <RezultataiApdoroti />
        <RezultataiGal />
      </Suspense>
    </>
  );
}

export default App;
