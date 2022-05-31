import React, { useState, useContext, useEffect } from "react";
import { Button, Container } from "@mui/material";
import RezultataiRodymasTT from "../RezultataiRodymasTT";

import Context from "../../../store/Context";

const ResultsFromJson = (props) => {
  const context = useContext(Context);
  // Getting links to call APIs from props
  const participantsWithData = props.data;

  const [rezultataiSuInfo, setRezultataiSuInfo] = useState([]);

  const dataFromAPIHandler = (props) => {
    const data = participantsWithData;
    const dataDalyviu = data;
    const dalyviuArray = [];

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
  };

  useEffect(() => {
    dataFromAPIHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Button variant="contained" sx={{ marginTop: "2rem" }}>
        {context.language === "ENG" ? "🏆 Results 🏆" : "🏆 Rezultatai 🏆"}{" "}
      </Button>
      {<RezultataiRodymasTT galutiniaiRez={rezultataiSuInfo} />}
    </Container>
  );
};

export default ResultsFromJson;
