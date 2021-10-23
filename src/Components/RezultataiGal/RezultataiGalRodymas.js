import React, { useState } from "react";
import classes from "../RezultataiGal/RezultataiGalRodymas.module.css";
import { Grid, Paper, Tabs, Tab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const RezultataiGalRodymas = (props) => {
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
      <div className={classes.distBtns}>
        <Tabs onChange={handleChange} value={value}>
          <Tab
            label="150km"
            onClick={() => {
              distancija("150");
            }}
          />
          <Tab
            label="130km"
            onClick={() => {
              distancija("130");
            }}
          />
          <Tab
            label="80km"
            onClick={() => {
              distancija("80");
            }}
          />
        </Tabs>
      </div>

      {showRez && (
        <Grid container spacing={2}>
          <Grid className={classes.gridInnerItem} item xs={4}>
            <div>
              <div className={classes.kategorija}>
                <h5>Kategorija </h5>
                <h3>{distM[0].kategorija}</h3>{" "}
              </div>

              <div className={classes.item}>
                {distM.map((elm, i) => (
                  <ul className={classes.ul}>
                    <Paper
                      elevation={3}
                      className={classes.name}
                      key={elm.laikas}
                    >
                      {i >= 0 && i <= 2 && (
                        <div className={classes.icon}>
                          <FontAwesomeIcon icon={faMedal} size={"2x"} />
                        </div>
                      )}

                      <li>
                        <h4>{elm.vardas}</h4>
                        <h4> {elm.pavarde[0]}</h4> finišavo <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>Finišavimo laikas :</p>
                        <p>{elm.laikas.slice(0, 7)}</p>
                      </li>
                    </Paper>
                  </ul>
                ))}
              </div>
            </div>
          </Grid>

          <Grid className={classes.gridInnerItem} item xs={4}>
            <div>
              {distM40.length > 0 && (
                <div className={classes.kategorija}>
                  <h5>Kategorija </h5>
                  <h3>{distM40[0].kategorija}</h3>{" "}
                </div>
              )}
              <div className={classes.item}>
                {distM40.map((elm, i) => (
                  <ul className={classes.ul} key={elm.laikas}>
                    <Paper elevation={3} className={classes.name}>
                      {i >= 0 && i <= 2 && (
                        <div className={classes.icon}>
                          <FontAwesomeIcon icon={faMedal} size={"2x"} />
                        </div>
                      )}

                      <li>
                        <h4>{elm.vardas}</h4>
                        <h4> {elm.pavarde[0]}</h4> finišavo <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>Finišavimo laikas :</p>
                        <p>{elm.laikas.slice(0, 7)}</p>
                      </li>
                    </Paper>
                  </ul>
                ))}
              </div>
            </div>
          </Grid>

          <Grid className={classes.gridInnerItem} item xs={4}>
            <div>
              {distW.length > 0 && (
                <div className={classes.kategorija}>
                  <h5>Kategorija </h5>
                  <h3> {distW[0].kategorija}</h3>{" "}
                </div>
              )}
              <div className={classes.item}>
                {distW.map((elm, i) => (
                  <ul className={classes.ul} key={elm.laikas}>
                    <Paper elevation={3} className={classes.name}>
                      {i >= 0 && i <= 2 && (
                        <div className={classes.icon}>
                          <FontAwesomeIcon icon={faMedal} size={"2x"} />
                        </div>
                      )}

                      <li>
                        <h4>{elm.vardas}</h4>
                        <h4> {elm.pavarde[0]}</h4> finišavo <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>Finišavimo laikas :</p>
                        <p>{elm.laikas.slice(0, 7)}</p>
                      </li>
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
