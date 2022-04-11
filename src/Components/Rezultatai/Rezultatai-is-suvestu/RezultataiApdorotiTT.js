import React, { useState, useContext } from "react";
import { Button, Container, LinearProgress, Alert } from "@mui/material";
import RezultataiRodymasTT from "../RezultataiRodymasTT";

import Context from "../../../store/Context";

const RezultataiApdorotiTT = (props) => {
  const context = useContext(Context);
  // Getting links to call APIs from props
  const participantsWithData = props.data;

  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [noRacers, setNoRacers] = useState(false);
  const [noFinishTime, setNoFinishTime] = useState(false);

  const [rezultataiSuInfo, setRezultataiSuInfo] = useState([]);

  const dataFromAPIHandler = async () => {
    setLoading(true);
    setNoRacers(false);
    setNoFinishTime(false);
    try {
      const response = await fetch(participantsWithData);
      const data = await response.json();
      const dataDalyviu = data;
      const dalyviuArray = [];

      if (dataDalyviu === null) {
        setNoRacers(true);
        setLoading(false);
        return;
      }

      for (const key in dataDalyviu) {
        dalyviuArray.push({
          distancija: dataDalyviu[key].dist,
          dviratis: dataDalyviu[key].dviratis,
          kategorija: dataDalyviu[key].grupe,
          laikas: dataDalyviu[key].vaziavimoLaikas,
          laikasMS: +dataDalyviu[key].vaziavimoLaikasMS,
          numeris: dataDalyviu[key].startoNr.toString(),
          vardas: dataDalyviu[key].vardas[0],
          pavarde: dataDalyviu[key].vardas[1],
        });
      }

      setRezultataiSuInfo(dalyviuArray);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }

    setShow(!show);
    setLoading(false);
  };
  return (
    <Container>
      {error && <p>Error : {error}</p>}
      {loading && (
        <Container maxWidth="xs">
          <LinearProgress />{" "}
        </Container>
      )}
      {noRacers && (
        <Container maxWidth="xs" sx={{ marginTop: "1rem" }}>
          <Alert severity="info">
            {context.language === "ENG"
              ? "No racers yet!"
              : "Nėra suvestų dalyvių!"}{" "}
          </Alert>
        </Container>
      )}
      {noFinishTime && (
        <Container maxWidth="xs" sx={{ marginTop: "1rem" }}>
          <Alert severity="info">
            {context.language === "ENG"
              ? "No one finished yet!"
              : "Nėra finišavusių!"}{" "}
          </Alert>
        </Container>
      )}

      <Button
        onClick={dataFromAPIHandler}
        variant="contained"
        sx={{ marginTop: "2rem" }}
      >
        {context.language === "ENG" ? "🏆 Results 🏆" : "🏆 Rezultatai 🏆"}{" "}
      </Button>
      {show && !error && !loading && (
        <RezultataiRodymasTT galutiniaiRez={rezultataiSuInfo} />
      )}
    </Container>
  );
};

export default RezultataiApdorotiTT;
