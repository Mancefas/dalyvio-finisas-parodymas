import React, { useState } from "react";
import { Paper, Container, Button } from "@mui/material";

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
        grupe: dataDalyviu[key].grupe,
        dalyvioNr: dataDalyviu[key].startoNr,
        dalyvioVardas: dataDalyviu[key].vardas,
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
        dalyvioNr: +rezultatuData[key].dalyvis,
      });
    }

    rezultatuArray.map(
      (_, index) =>
        (rezultatuArray[index].daugiauInfo = dalyviuArray.find(
          (elm) => elm.dalyvioNr === rezultatuArray[index].dalyvioNr
        ))
    );

    setRezultataiSuInfo(rezultatuArray);
    setShow(!show);
  };

  const showData = (
    <Container className={"container"}>
      <ul>
        {rezultataiSuInfo.length !== 0 &&
          rezultataiSuInfo.map((rezultatas) => (
            <li className={"li"} key={rezultatas.laikas}>
              <Paper elevation={4}>
                <h2>Dalyvio numeris : {rezultatas.dalyvioNr}</h2>
                <h4>
                  Vardas :
                  {rezultatas.daugiauInfo !== undefined &&
                    rezultatas.daugiauInfo.dalyvioVardas[0]}
                </h4>
                <h4>
                  Grupė :
                  {rezultatas.daugiauInfo !== undefined &&
                    rezultatas.daugiauInfo.grupe}
                </h4>
                <h4>Rezultatas : {rezultatas.laikas}</h4>
                <h4>
                  Distancija :
                  {rezultatas.daugiauInfo !== undefined &&
                    rezultatas.daugiauInfo.distancija}
                </h4>
                <h4>
                  Dviratis:
                  {rezultatas.daugiauInfo !== undefined &&
                    rezultatas.daugiauInfo.dviratis}
                </h4>
              </Paper>
            </li>
          ))}
      </ul>
    </Container>
  );

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
      <div>{show && showData}</div>
    </div>
  );
};

export default RezultataiApdoroti;
