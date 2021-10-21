import React, { useState } from "react";
import classes from "../RezultataiGal/RezultataiGalRodymas.module.css";
import { Button, Grid, Paper, Avatar, Badge } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const RezultataiGalRodymas = (props) => {
  const { galutiniaiRez } = props;

  const [showRez, setShowRez] = useState(false);

  const [distM, setDistM] = useState([]);
  const [distM40, setDistM40] = useState([]);
  const [distW, setDistW] = useState([]);

  const distancija = (event) => {
    const distClicked = event;

    const M = galutiniaiRez
      .filter((word) => {
        return word.distancija === +distClicked && word.kategorija === "M";
      })
      .sort((a, b) => (a.laikas > b.laikas ? 1 : -1))
      .slice(0, 3);

    console.log(M);

    setDistM(M);

    const M40 = galutiniaiRez
      .filter((word) => {
        return word.distancija === +distClicked && word.kategorija === "M40";
      })
      .sort((a, b) => (a.laikas > b.laikas ? 1 : -1))
      .slice(0, 3);

    setDistM40(M40);

    const W = galutiniaiRez
      .filter((word) => {
        return word.distancija === +distClicked && word.kategorija === "W";
      })
      .sort((a, b) => (a.laikas > b.laikas ? 1 : -1))
      .slice(0, 3);

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
          <Grid className={classes.gridInnerItem} item xs={12}>
            <div>
              <div className={classes.kategorija}>
                <p>Kategorija </p>
                <Avatar variant="square">{distM[0].kategorija}</Avatar>{" "}
              </div>

              <div className={classes.item}>
                {distM.map((elm, i) => (
                  <ul className={classes.ul}>
                    <Paper
                      elevation={3}
                      className={classes.name}
                      key={elm.laikas}
                    >
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faMedal} size={"2x"} />
                      </div>

                      <li>
                        <h3>{elm.vardas}</h3>
                        <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                      </li>
                      <li>Finišavimo laikas : {elm.laikas.slice(0, 7)} </li>
                    </Paper>
                  </ul>
                ))}
              </div>
            </div>
          </Grid>

          <Grid className={classes.gridInnerItem} item xs={12}>
            <div>
              {distM40.length > 0 && (
                <div className={classes.kategorija}>
                  <p>Kategorija </p>
                  <Badge
                    badgeContent={distM40[0].kategorija.slice(1, 3)}
                    color="primary"
                  >
                    <Avatar variant="square">
                      {" "}
                      {distM40[0].kategorija[0]}{" "}
                    </Avatar>{" "}
                  </Badge>
                </div>
              )}
              <div className={classes.item}>
                {distM40.map((elm, i) => (
                  <ul className={classes.ul} key={elm.laikas}>
                    <Paper elevation={3} className={classes.name}>
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faMedal} size={"2x"} />
                      </div>

                      <li>
                        <h3>{elm.vardas}</h3>
                        <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                      </li>
                      <li>Finišavimo laikas : {elm.laikas.slice(0, 7)}</li>
                    </Paper>
                  </ul>
                ))}
              </div>
            </div>
          </Grid>

          <Grid className={classes.gridInnerItem} item xs={12}>
            <div>
              {distW.length > 0 && (
                <div className={classes.kategorija}>
                  <p>Kategorija </p>
                  <Avatar>{distW[0].kategorija}</Avatar>{" "}
                </div>
              )}
              <div className={classes.item}>
                {distW.map((elm, i) => (
                  <ul className={classes.ul} key={elm.laikas}>
                    <Paper elevation={3} className={classes.name}>
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faMedal} size={"2x"} />
                      </div>

                      <li>
                        <h3>{elm.vardas}</h3>
                        <h3> {elm.pavarde[0]}</h3> finišavo <h3>{i + 1}</h3>
                      </li>
                      <li>Finišavimo laikas : {elm.laikas.slice(0, 7)}</li>
                    </Paper>
                  </ul>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RezultataiGalRodymas;
