import React, { useState } from "react";
import classes from "../RezultataiGal/RezultataiGalRodymas.module.css";
import { Button, Grid, Paper } from "@mui/material";

const RezultataiGalRodymas = (props) => {
  const { galutiniaiRez } = props;

  const [showRez, setShowRez] = useState(false);

  const [distM, setDistM] = useState([]);
  const [distM40, setDistM40] = useState([]);
  const [distW, setDistW] = useState([]);

  const distancija = (event) => {
    const distClicked = event;

    const M = galutiniaiRez.filter((word) => {
      return word.distancija === +distClicked && word.kategorija === "M";
    });

    setDistM(M);

    const M40 = galutiniaiRez.filter((word) => {
      return word.distancija === +distClicked && word.kategorija === "M40";
    });
    setDistM40(M40);

    const W = galutiniaiRez.filter((word) => {
      return word.distancija === +distClicked && word.kategorija === "W";
    });
    setDistW(W);
    setShowRez(true);
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            distancija("150");
          }}
        >
          150km
        </Button>
        <Button
          onClick={() => {
            distancija("130");
          }}
        >
          130km
        </Button>
        <Button
          onClick={() => {
            distancija("80");
          }}
        >
          80km
        </Button>
      </div>

      {showRez && (
        <Grid container spacing={2}>
          <Grid className={classes.grid} item xs={4}>
            {distM.map((elm, i) => (
              <ul className={classes.pirmas} key={elm.laikas}>
                <Paper elevation={3} className={classes.name}>
                  <li>
                    <h3>{elm.vardas}</h3>
                    <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                  </li>
                  <li>Kategorija : {elm.kategorija}</li>
                  <li>Finišavimo laikas : {elm.laikas}</li>
                </Paper>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {distM40.map((elm, i) => (
              <ul className={classes.pirmas} key={elm.laikas}>
                <Paper elevation={3} className={classes.name}>
                  <li>
                    <h3>{elm.vardas}</h3>
                    <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                  </li>

                  <li>Kategorija : {elm.kategorija}</li>

                  <li>Finišavimo laikas : {elm.laikas}</li>
                </Paper>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {distW.map((elm, i) => (
              <ul className={classes.pirmas} key={elm.laikas}>
                <Paper elevation={3} className={classes.name}>
                  <li>
                    <h3>{elm.vardas}</h3>
                    <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                  </li>

                  <li>Kategorija : {elm.kategorija}</li>

                  <li>Finišavimo laikas : {elm.laikas}</li>
                </Paper>
              </ul>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RezultataiGalRodymas;
