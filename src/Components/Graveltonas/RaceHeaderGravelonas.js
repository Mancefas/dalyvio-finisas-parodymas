import React, { useContext } from "react";
import graveltonas from "../../img/graveltonas.jpg";
import classes from "./RaceHeaderGravelonas.module.css";
import { Container, Typography } from "@mui/material";

import Context from "../../store/Context";

const RaceHeaderGraveltonas = () => {
  const context = useContext(Context);

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", md: "flex", lg: "flex" },
        }}
      >
        <img
          src={graveltonas}
          alt="gravelonas varzybos"
          className={classes.img}
        />
      </Container>
      <Container
        maxWidth="md"
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "#FF6634",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h5">
          {context.language === "ENG" ? "April 9" : "Baladžio 9"}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Gravel TT
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          #Gravelonas
        </Typography>
        <Typography variant="h5">Kaunas</Typography>
      </Container>
    </>
  );
};

export default RaceHeaderGraveltonas;
