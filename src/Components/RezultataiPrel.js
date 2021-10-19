import React, { useState } from "react";
import "./RezultataiPrel.css";
import { Paper, Container, Button, LinearProgress } from "@mui/material";

const RezultataiPrel = () => {
  const [rezultatai, setRezultatai] = useState([]);
  const [loading, setLoading] = useState();

  const rezultataiDataHandler = async () => {
    setLoading(true);
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
    console.log(data);
    console.log(dataGauta);
    setRezultatai(dataGauta);
    setLoading(false);
  };

  return (
    <div>
      {loading && <LinearProgress color="success" />}

      <Container className={"btn"} maxWidth="xs">
        <Button
          onClick={rezultataiDataHandler}
          variant="outlined"
          color="success"
        >
          Rezultatai-preliminarūs
        </Button>
      </Container>
      <Container className={"container"} maxWidth="sm">
        <ul>
          {rezultatai.map((rezultatas, indx) => (
            <li key={rezultatas.laikas}>
              <Paper elevation={4}>
                <h2>Dalyvio numeris : {rezultatas.dalyvis}</h2>
                <h3>Atvažiavo į finišą : {indx + 1}</h3>
                <p>Finišavimo laikas : {rezultatas.laikas}</p>
              </Paper>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default RezultataiPrel;