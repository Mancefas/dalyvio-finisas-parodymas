import React, { useState, useContext } from "react";
import classes from "../Rezultatai/RezultataiRodymas.module.css";
import { Grid, Paper, Tabs, Tab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Context from "../../store/Context";

const RezultataiRodymasTT = (props) => {
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

    const men = galutiniaiRez.filter((word) => {
      return (
        word.dviratis === distClicked &&
        word.kategorija === "M" &&
        word.laikas !== undefined
      );
    });
    const uniqueM = [
      ...men.reduce((accumulator, current) => {
        if (!accumulator.some((x) => x.numeris === current.numeris)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    ];
    setDistM(uniqueM);

    const men40 = galutiniaiRez.filter((word) => {
      return (
        word.dviratis === distClicked &&
        word.kategorija === "M40" &&
        word.laikas !== undefined
      );
    });
    const uniqueM40 = [
      ...men40.reduce((accumulator, current) => {
        if (!accumulator.some((x) => x.numeris === current.numeris)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []),
    ];
    setDistM40(uniqueM40);

    const women = galutiniaiRez.filter((word) => {
      return (
        word.dviratis === distClicked &&
        word.kategorija === "W" &&
        word.laikas !== undefined
      );
    });
    const uniqueW = [
      ...women.reduce((accumulator, current) => {
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
                {distM
                  .sort((a, b) => a.laikasMS - b.laikasMS)
                  .map((elm, i) => (
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
                          <h4>{elm.laikas === undefined ? "🚫🚴🏻‍♂️" : i + 1}</h4>
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
                {distM40
                  .sort((a, b) => a.laikasMS - b.laikasMS)
                  .map((elm, i) => (
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
                            : "Finišavimo :"}
                          <h4>{elm.laikas === undefined ? "🚫🚴🏻‍♂️" : i + 1}</h4>
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
                  <h5>Kategorija </h5>
                  <h3> {distW[0].kategorija}</h3>{" "}
                </div>
              )}
              <div className={classes.item}>
                {distW
                  .sort((a, b) => a.laikasMS - b.laikasMS)
                  .map((elm, i) => (
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
                          <h4>{elm.laikas === undefined ? "🚫🚴🏻‍♂️" : i + 1}</h4>
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

export default RezultataiRodymasTT;
