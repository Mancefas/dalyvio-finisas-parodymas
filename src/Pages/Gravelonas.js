import React from "react";
import { Container } from "@mui/material";
import RaceHeaderGravelonas from "../Components/Graveltonas/RaceHeaderGravelonas";
import RezultataiApdorotiTT from "../Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdorotiTT";

import config from "../config.json";

const Gravelonas = () => {
  const dataFromAPI = config.API_URL_Gravelonas_data;

  return (
    <>
      <Container sx={{ minHeight: "72vh", marginBottom: "0.5rem" }}>
        <RaceHeaderGravelonas />
        <Container maxWidth="xl">
          <RezultataiApdorotiTT data={dataFromAPI} />
        </Container>
      </Container>
    </>
  );
};

export default Gravelonas;
