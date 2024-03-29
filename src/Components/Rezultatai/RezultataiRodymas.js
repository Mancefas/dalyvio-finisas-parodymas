import React, { useState, useContext } from "react";
import classes from "../Rezultatai/RezultataiRodymas.module.css";
import { Grid, Paper, Tabs, Tab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Context from "../../store/Context";

const RezultataiGalRodymas = (props) => {
  const context = useContext(Context);

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
    const uniqueM = [
      ...M.reduce((accumulator, current) => {
        if (!accumulator.some((x) => x.numeris === current.numeris)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    ];

    setDistM(uniqueM);

    const M40 = galutiniaiRez.filter((word) => {
      return word.distancija === +distClicked && word.kategorija === "M40";
    });
    const uniqueM40 = [
      ...M40.reduce((accumulator, current) => {
        if (!accumulator.some((x) => x.numeris === current.numeris)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    ];

    setDistM40(uniqueM40);

    const W = galutiniaiRez.filter((word) => {
      return word.distancija === +distClicked && word.kategorija === "W";
    });
    const uniqueW = [
      ...W.reduce((accumulator, current) => {
        if (!accumulator.some((x) => x.numeris === current.numeris)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    ];

    setDistW(uniqueW);
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
              {distM.length > 0 && (
                <div className={classes.kategorija}>
                  <h5>
                    {context.language === "ENG" ? "Category" : "Kategorija"}{" "}
                  </h5>
                  <h3>{distM[0].kategorija}</h3>{" "}
                </div>
              )}

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
                        <h4> {elm.pavarde[0]}</h4>
                        {context.language === "ENG"
                          ? "Finish place"
                          : "Finišavo"}{" "}
                        <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>
                          {context.language === "ENG"
                            ? "Finishing time :"
                            : "Finišavimo laikas :"}
                        </p>
                        <p>{elm.laikas}</p>
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
                  <h5>
                    {context.language === "ENG" ? "Category" : "Kategorija"}{" "}
                  </h5>
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
                        <h4> {elm.pavarde[0]}</h4>
                        {context.language === "ENG"
                          ? "Finishing place :"
                          : "Finišavimo laikas :"}
                        <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>
                          {context.language === "ENG"
                            ? "Finishing time :"
                            : "Finišavimo laikas :"}
                        </p>
                        <p>{elm.laikas}</p>
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
                  <h5>
                    {context.language === "ENG" ? "Category" : "Kategorija"}{" "}
                  </h5>
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
                        <h4> {elm.pavarde[0]}</h4>
                        {context.language === "ENG"
                          ? "Finish place"
                          : "Finišavo"}{" "}
                        <h4>{i + 1}</h4>
                      </li>
                      <li>
                        <p>
                          {context.language === "ENG"
                            ? "Finishing time :"
                            : "Finišavimo laikas :"}{" "}
                        </p>
                        <p>{elm.laikas}</p>
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
