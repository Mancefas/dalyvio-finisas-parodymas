import React, { useState } from "react";
import { Grid, Container, Tabs, Tab } from "@mui/material";

import { sortingRacers } from "../Helpers/helpers";

import ShowingRacerTime from "../ShowingRacerTime/ShowingRacerTime";

const RezultataiRodymasTT = (props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { galutiniaiRez } = props;

  const [showRez, setShowRez] = useState(false);

  const [distM, setDistM] = useState([]);
  const [distM40, setDistM40] = useState([]);
  const [distW, setDistW] = useState([]);

  const distancija = (event) => {
    const distClicked = event;

    const men = sortingRacers(galutiniaiRez, distClicked, "M");
    setDistM(men);

    const men40 = sortingRacers(galutiniaiRez, distClicked, "M40");
    setDistM40(men40);

    const women = sortingRacers(galutiniaiRez, distClicked, "W");
    setDistW(women);

    setShowRez(true);
  };

  return (
    <>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Tabs onChange={handleChange} value={value}>
          <Tab
            label="MTB"
            onClick={() => {
              distancija("MTB");
            }}
          />
          <Tab
            label="GRAVEL/CX"
            onClick={() => {
              distancija("GRAVEL/CX");
            }}
          />
        </Tabs>
      </Container>

      {showRez && (
        <Grid container spacing={1}>
          <ShowingRacerTime arrayOfRacers={distM} />
          <ShowingRacerTime arrayOfRacers={distM40} />
          <ShowingRacerTime arrayOfRacers={distW} />
        </Grid>
      )}
    </>
  );
};

export default RezultataiRodymasTT;
