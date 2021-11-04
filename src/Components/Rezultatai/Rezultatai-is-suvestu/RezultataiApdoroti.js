import React, { useState } from "react";
import { Button } from "@mui/material";
import RezultataiRodymas from "../RezultataiRodymas";

const RezultataiApdoroti = () => {
  const [rezultataiSuInfo, setRezultataiSuInfo] = useState([]);
  const [show, setShow] = useState(false);

  const dataFromAPIHandler = async () => {
    const response = await Promise.all([
      fetch(
        "https://gif-rezultatai-b73a6-default-rtdb.europe-west1.firebasedatabase.app/rez.json"
      ),
      fetch(
        "https://gif-rezultatai-b73a6-default-rtdb.europe-west1.firebasedatabase.app/dal.json"
      ),
    ]);
    const data = await Promise.all(response.map((r) => r.json()));
    //Cia reikia pakeisti -MmHYkdy40vSUsvXkdwP i nauja id jei kitas dalyviu sarasas
    const dataDalyviu = data[1]["-MmHYkdy40vSUsvXkdwP"];
    const dalyviuArray = [];

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
    setShow(!show);
  };

  return (
    <div>
      <Button
        // disabled={true}
        onClick={dataFromAPIHandler}
        variant="contained"
        sx={{ marginTop: "2rem" }}
      >
        Rezultatai finišo{" "}
      </Button>
      {show && <RezultataiRodymas galutiniaiRez={rezultataiSuInfo} />}
    </div>
  );
};

export default RezultataiApdoroti;
