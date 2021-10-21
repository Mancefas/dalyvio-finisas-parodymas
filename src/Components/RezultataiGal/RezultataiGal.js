import React, { useState } from "react";
import classes from "./RezultataiGal.module.css";
import { Button, Container, LinearProgress } from "@mui/material";
import RezultataiGalRodymas from "../RezultataiGal/RezultataiGalRodymas";

const RezultataiGal = () => {
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [galutiniaiRez, setGalutiniaiRez] = useState([]);
  const [error, setError] = useState(null);

  const rezHandler = async () => {
    setLoad(true);
    setShow(!show);
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

  console.log();

  return (
    <Container className={classes.container}>
      {error && <p className={classes.errMsg}>Error : {error}</p>}
      {load && <LinearProgress className={classes.progressBar} />}
      <Container className={classes.btn} maxWidth="xs">
        <Button onClick={rezHandler} variant="contained">
          Galutiniai rezultatai
        </Button>
      </Container>
      {!error && show && <RezultataiGalRodymas galutiniaiRez={galutiniaiRez} />}
    </Container>
  );
};

export default RezultataiGal;
