import React, { useState, useContext } from "react";
import { Button, Container, LinearProgress, Alert } from "@mui/material";
import RezultataiRodymas from "../RezultataiRodymas";

import Context from "../../../store/Context";

const RezultataiApdoroti = (props) => {
  const context = useContext(Context);
  // Getting links to call APIs from props
  const results = props.rez;
  const participants = props.dal;

  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [rezultataiSuInfo, setRezultataiSuInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [noRacers, setNoRacers] = useState(false);
  const [noFinishTime, setNoFinishTime] = useState(false);

  const dataFromAPIHandler = async () => {
    setLoading(true);
    setNoRacers(false);
    setNoFinishTime(false);
    try {
      const response = await Promise.all([fetch(results), fetch(participants)]);
      const data = await Promise.all(response.map((r) => r.json()));
      const dataDalyviu = data[1];
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
          numeris: dataDalyviu[key].startoNr,
          vardas: dataDalyviu[key].vardas[0],
          pavarde: dataDalyviu[key].vardas[1],
        });
      }

      const rezultatuData = data[0];
      const rezultatuArray = [];

      if (rezultatuData === null) {
        setNoFinishTime(true);
        setLoading(false);
        return;
      }

      for (const key in rezultatuData) {
        rezultatuArray.push({
          id: key,
          startas: rezultatuData[key].startoLaikas,
          finisas: rezultatuData[key].finisoLaikas,
          laikas: rezultatuData[key].vaziavimoLaikas,
          numeris: +rezultatuData[key].dalyvis,
        });
      }

      rezultatuArray.map(
        (_, index) =>
          (rezultatuArray[index].daugiauInfo = dalyviuArray.find(
            (elm) => elm.numeris === rezultatuArray[index].numeris
          ))
      );

      const rezultatuArrayPapildyta = rezultatuArray.map((element) => {
        const object = element;
        const nestedObject = element.daugiauInfo;
        const newOBject = Object.assign(object, nestedObject);
        return newOBject;
      });
      setRezultataiSuInfo(rezultatuArrayPapildyta);
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
        // disabled={true}
        onClick={dataFromAPIHandler}
        variant="contained"
        sx={{ marginTop: "2rem" }}
      >
        {context.language === "ENG" ? "🏆 Results 🏆" : "🏆 Rezultatai 🏆"}{" "}
      </Button>
      {show && !error && !loading && (
        <RezultataiRodymas galutiniaiRez={rezultataiSuInfo} />
      )}
    </Container>
  );
};

export default RezultataiApdoroti;
