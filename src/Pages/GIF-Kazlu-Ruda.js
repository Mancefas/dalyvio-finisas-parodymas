import React from "react";

import RaceHeader from "../Components/RaceHeader/RaceHeader";
import RezultataiPrel from "../Components/Rezultatai/Rezultatai-preliminarus/RezultataiPrel";
import RezultataiApdoroti from "../Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdoroti";

const GifKazluRuda = () => {
  return (
    <>
      <RaceHeader />
      <RezultataiPrel />
      <RezultataiApdoroti />
    </>
  );
};

export default GifKazluRuda;
