import React, { useState } from "react";
import { Button, Container, LinearProgress } from "@mui/material";
import RezultataiRodymas from "../RezultataiRodymas";

import config from "../../../config.json";

const RezultataiApdoroti = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [rezultataiSuInfo, setRezultataiSuInfo] = useState([]);
  const [show, setShow] = useState(false);

  const dataFromAPIHandler = async () => {
    setLoading(true);
    try {
      const response = await Promise.all([
        fetch(config.API_URL_rezultatai),
        fetch(config.API_URL_dalyviai),
      ]);
      const data = await Promise.all(response.map((r) => r.json()));
      //Cia reikia pakeisti -MmHYkdy40vSUsvXkdwP i nauja id jei kitas dalyviu sarasas
      const dataDalyviu = data[1];
      const dalyviuArray = [];

      // console.log(dataDalyviu);

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

      console.log(rezultatuData);

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
      <Button
        // disabled={true}
        onClick={dataFromAPIHandler}
        variant="contained"
        sx={{ marginTop: "2rem" }}
      >
        Rezultatai finišo{" "}
      </Button>
      {show && !error && !loading && (
        <RezultataiRodymas galutiniaiRez={rezultataiSuInfo} />
      )}
    </Container>
  );
};

export default RezultataiApdoroti;
