import React from "react";

import RaceHeader from "../Components/RaceHeader/RaceHeader";
import RezultataiPrel from "../Components/Rezultatai/Rezultatai-preliminarus/RezultataiPrel";
import RezultataiApdoroti from "../Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdoroti";
import { Container } from "@mui/material";

const GravelRace = () => {
  return (
    <Container sx={{ minHeight: "72vh" }}>
      <RaceHeader />
      <RezultataiPrel />
      <RezultataiApdoroti />
    </Container>
  );
};

export default GravelRace;
