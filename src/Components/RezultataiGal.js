import React, { useState } from "react";
import classes from "./RezultataiGal.module.css";
import { Button, Container, LinearProgress, Box } from "@mui/material";

const RezultataiGal = () => {
  const [load, setLoad] = useState(false);
  const [galutiniaiRez, setGalutiniaiRez] = useState([]);
  const [error, setError] = useState(null);

  const rezHandler = async () => {
    setLoad(true);
    try {
      const resp = await fetch(
        "https://gif-rezultatai-b73a6-default-rtdb.europe-west1.firebasedatabase.app/rezGalutiniai.json"
      );
      const data = await resp.json();
      const rezArray = data["-MmIGXSbPAXnh0DNADEZ"];
      setGalutiniaiRez(rezArray);
    } catch (error) {
      setError(error.message);
    }
    setLoad(false);
  };

  return (
    <Container className={classes.container}>
      {error && <p className={classes.errMsg}>Error : {error}</p>}
      {load && <LinearProgress className={classes.progressBar} />}
      <Button onClick={rezHandler} variant="contained">
        Galutiniai rezultatai
      </Button>
    </Container>
  );
};

export default RezultataiGal;
