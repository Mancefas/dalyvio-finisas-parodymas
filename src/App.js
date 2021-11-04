import "./App.css";
import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Components/Header/Header"));
const RezultataiPrel = lazy(() =>
  import("./Components/Rezultatai/Rezultatai-preliminarus/RezultataiPrel")
);
const RezultataiApdoroti = lazy(() =>
  import("./Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdoroti")
);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Įkeliama...</h2>}>
        <Header />
        <RezultataiPrel />
        <RezultataiApdoroti />
      </Suspense>
    </>
  );
}

export default App;
