import React from "react";
import graveltonas from "../../img/graveltonas.jpg";
import classes from "./RaceHeaderGravelonas.module.css";
import { Container } from "@mui/material";

const RaceHeaderGraveltonas = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={graveltonas}
          alt="gravelonas varzybos"
          className={classes.img}
        />
      </Container>
    </>
  );
};

export default RaceHeaderGraveltonas;
