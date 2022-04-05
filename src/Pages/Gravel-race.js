import React from "react";

import RaceHeader from "../Components/RaceHeader/RaceHeader";
import RezultataiPrel from "../Components/Rezultatai/Rezultatai-preliminarus/RezultataiPrel";
import RezultataiApdoroti from "../Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdoroti";
import { Container } from "@mui/material";

import config from "../config.json";

const GravelRace = () => {
  const rez = config.API_URL_rezultatai;
  const dal = config.API_URL_dalyviai;

  return (
    <Container sx={{ minHeight: "72vh" }}>
      <RaceHeader />
      <RezultataiPrel />
      <RezultataiApdoroti rez={rez} dal={dal} />
    </Container>
  );
};

export default GravelRace;
