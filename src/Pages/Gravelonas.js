import React from "react";
import { Container } from "@mui/material";
import RaceHeaderGravelonas from "../Components/Graveltonas/RaceHeaderGravelonas";
// import RezultataiApdorotiTT from "../Components/Rezultatai/Rezultatai-is-suvestu/RezultataiApdorotiTT";
import ResultsFromJson from "../Components/Rezultatai/Rezultatai-is-JSON/ResultsFromJson";

// import config from "../config.json";
import dataFromJson from "../Race-results-jsons/gravelonas-default-rtdb-export.json";

const Gravelonas = () => {
  // getting data from json file (downloaded from server)
  const dataFromAPI = dataFromJson["dal"];
  // getting data from server
  // const dataFromAPI = config.API_URL_Gravelonas_data;

  return (
    <>
      <Container sx={{ minHeight: "72vh", marginBottom: "0.5rem" }}>
        <RaceHeaderGravelonas />
        <Container maxWidth="xl">
          {/* Shows data from server */}
          {/* <RezultataiApdorotiTT data={dataFromAPI} /> */}
          {/* Getting data from JSON(downloaded from server) */}
          <ResultsFromJson data={dataFromAPI} />
        </Container>
      </Container>
    </>
  );
};

export default Gravelonas;
