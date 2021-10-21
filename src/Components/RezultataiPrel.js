import React, { useState } from "react";
import "./RezultataiPrel.css";
import { Paper, Container, Button, LinearProgress } from "@mui/material";

const RezultataiPrel = () => {
  const [rezultatai, setRezultatai] = useState([]);
  const [loading, setLoading] = useState();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const rezultataiDataHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://gif-rezultatai-b73a6-default-rtdb.europe-west1.firebasedatabase.app/rez.json"
      );
      const data = await response.json();
      const dataGauta = [];

      for (const key in data) {
        dataGauta.push({
          id: key,
          atvaziavo: data[key].atvaziavo,
          laikas: data[key].laikas,
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
        <Button onClick={rezultataiDataHandler} variant="outlined" disabled>
          Rezultatai-preliminarūs
        </Button>
      </Container>
      {show && (
        <Container className={"container"}>
          <ul className={"ul"}>
            {rezultatai.map((rezultatas, indx) => (
              <li className={"li"} key={rezultatas.laikas}>
                <Paper elevation={4}>
                  <h2>Dalyvio numeris : {rezultatas.dalyvis}</h2>
                  <h3>Atvažiavo į finišą : {indx + 1}</h3>
                  <p>Finišavimo laikas : {rezultatas.laikas}</p>
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
