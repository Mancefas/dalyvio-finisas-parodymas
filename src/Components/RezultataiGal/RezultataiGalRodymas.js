import React, { useState } from "react";
import classes from "../RezultataiGal/RezultataiGalRodymas.module.css";
import { Button, Grid } from "@mui/material";

const RezultataiGalRodymas = (props) => {
  const { galutiniaiRez } = props;

  const [showRez, setShowRez] = useState(false);
  const [showRez2, setShowRez2] = useState(false);
  const [showRez3, setShowRez3] = useState(false);

  const [dist1M, setDist1M] = useState([]);
  const [dist1M40, setDist1M40] = useState([]);
  const [dist1W, setDist1W] = useState([]);

  const [dist2M, setDist2M] = useState([]);
  const [dist2M40, setDist2M40] = useState([]);
  const [dist2W, setDist2W] = useState([]);

  const [dist3M, setDist3M] = useState([]);
  const [dist3M40, setDist3M40] = useState([]);
  const [dist3W, setDist3W] = useState([]);

  const distancija1 = () => {
    const M = galutiniaiRez.filter((word) => {
      return word.distancija === 150 && word.kategorija === "M";
    });
    setDist1M(M);

    const M40 = galutiniaiRez.filter((word) => {
      return word.distancija === 150 && word.kategorija === "M40";
    });
    setDist1M40(M40);

    const W = galutiniaiRez.filter((word) => {
      return word.distancija === 150 && word.kategorija === "W";
    });
    setDist1W(W);
    setShowRez(true);
    setShowRez2(false);
    setShowRez3(false);
  };

  const distancija2 = () => {
    const M = galutiniaiRez.filter((word) => {
      return word.distancija === 130 && word.kategorija === "M";
    });
    setDist2M(M);

    const M40 = galutiniaiRez.filter((word) => {
      return word.distancija === 130 && word.kategorija === "M40";
    });
    setDist2M40(M40);

    const W = galutiniaiRez.filter((word) => {
      return word.distancija === 130 && word.kategorija === "W";
    });
    setDist2W(W);
    setShowRez(false);
    setShowRez2(true);
    setShowRez3(false);
  };

  const distancija3 = () => {
    const M = galutiniaiRez.filter((word) => {
      return word.distancija === 80 && word.kategorija === "M";
    });
    setDist3M(M);

    const M40 = galutiniaiRez.filter((word) => {
      return word.distancija === 80 && word.kategorija === "M40";
    });
    setDist3M40(M40);

    const W = galutiniaiRez.filter((word) => {
      return word.distancija === 80 && word.kategorija === "W";
    });
    setDist3W(W);
    setShowRez(false);
    setShowRez2(false);
    setShowRez3(true);
  };

  console.log(galutiniaiRez);

  return (
    <>
      <div>
        <Button onClick={distancija1}>150km</Button>
        <Button onClick={distancija2}>130km</Button>
        <Button onClick={distancija3}>80km</Button>
      </div>

      {showRez && (
        <Grid container spacing={2}>
          <Grid className={classes.grid} item xs={4}>
            {dist1M.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist1M40.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist1W.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>
        </Grid>
      )}

      {showRez2 && (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {dist2M.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist2M40.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist2W.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>
        </Grid>
      )}

      {showRez3 && (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {dist3M.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist3M40.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>

          <Grid item xs={4}>
            {dist3W.map((elm, i) => (
              <ul key={elm.laikas}>
                <li>
                  <h3>
                    {elm.vardas} {elm.pavarde[0]}
                  </h3>{" "}
                  finišavo {i + 1}
                </li>

                <li>Kategorija : {elm.kategorija}</li>

                <li>Finišavimo laikas : {elm.laikas}</li>
              </ul>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RezultataiGalRodymas;
