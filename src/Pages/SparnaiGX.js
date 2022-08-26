import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import config from "../config.json";

const SparnaiGX = () => {
  const [raceData, setRaceData] = useState();

  const gettingDataFromAPIHandler = async () => {
    try {
      const response = await fetch(config.API_URL_SparnaiGX);
      const data = await response.json();
      const dataDalyviu = data;

      let dalyviuArray = [];

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

      const filterDataWithTime = dalyviuArray.filter(
        (item) => item.laikas !== undefined
      );
      setRaceData(filterDataWithTime);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    gettingDataFromAPIHandler();
  }, []);

  return (
    <Container sx={{ minHeight: "72vh" }}>
      <Typography variant="h3" sx={{ margin: "1rem" }}>
        Sparnai gx tarpinis finišas
      </Typography>

      {raceData &&
        raceData.map((element) => (
          <Card
            sx={{
              width: "15%",
              gap: "1rem",
              margin: "auto",
              backgroundColor: "grey",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography>
                <b>{element.numeris}</b>
              </Typography>
              <Typography>
                {element.vardas} {element.pavarde[0]}
              </Typography>
              <Typography>
                distancija: <b>{element.distancija}</b>
              </Typography>
              <Typography>Finišavimo laikas</Typography>
              <Typography>
                <b>{element.laikas}</b>
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default SparnaiGX;
