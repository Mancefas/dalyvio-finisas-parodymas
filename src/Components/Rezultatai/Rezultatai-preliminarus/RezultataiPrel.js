import React, { useState } from "react";
import "./RezultataiPrel.css";
import { Paper, Container, Button, LinearProgress, Alert } from "@mui/material";

import config from "../../../config.json";

const RezultataiPrel = () => {
  const [rezultatai, setRezultatai] = useState([]);
  const [loading, setLoading] = useState();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const rezultataiDataHandler = async () => {
    setLoading(true);
    setNoResults(false);
    try {
      const response = await fetch(config.API_URL_rezultatai);
      const data = await response.json();
      const dataGauta = [];

      if (data === null) {
        setNoResults(true);
        setLoading(false);
        return;
      }

      for (const key in data) {
        dataGauta.push({
          id: key,
          startas: data[key].startoLaikas,
          finisas: data[key].finisoLaikas,
          laikas: data[key].vaziavimoLaikas,
          dalyvis: data[key].dalyvis,
        });
      }
      setRezultatai(dataGauta);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    setShow(!show);
  };

  return (
    <Container>
      {loading && <LinearProgress color="success" />}

      {error && <p className={"errMsg"}>Error : {error}</p>}

      <Container className={"btn"} maxWidth="xs">
        <Button onClick={rezultataiDataHandler} variant="outlined">
          Rezultatai-preliminarūs
        </Button>
      </Container>
      {noResults && (
        <Container maxWidth="xs" sx={{ marginTop: "1rem" }}>
          <Alert severity="info">Dar nėra rezultatų!</Alert>
        </Container>
      )}
      {show && (
        <Container className={"container"}>
          <ul className={"ul"}>
            {rezultatai.map((rezultatas, indx) => (
              <li className={"li"} key={rezultatas.laikas}>
                <Paper elevation={4}>
                  <h2>Dalyvio numeris : {rezultatas.dalyvis}</h2>
                  <h3>Atvažiavo į finišą : {indx + 1}</h3>
                  <h4>Starto laikas - {rezultatas.startas}</h4>
                  <h4>Finišavimo laikas - {rezultatas.finisas}</h4>
                  <h4>Rezultatas - {rezultatas.laikas}</h4>
                </Paper>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </Container>
  );
};

export default RezultataiPrel;
