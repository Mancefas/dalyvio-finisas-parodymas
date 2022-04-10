import React, { useContext } from "react";
import { Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import classes from "../ShowingRacerTime/showingRacerTime.module.css";
import Context from "../../store/Context";

const ShowingRacerTime = (props) => {
  const context = useContext(Context);

  const arrayOfGroupRacers = props.arrayOfRacers;

  return (
    <Grid className={classes.gridInnerItem} item xs={4}>
      <div>
        {arrayOfGroupRacers.length > 0 && (
          <div className={classes.kategorija}>
            <h5>{context.language === "ENG" ? "Category" : "Kategorija"} </h5>
            <h3>{arrayOfGroupRacers[0].kategorija}</h3>{" "}
          </div>
        )}

        <div className={classes.item}>
          {arrayOfGroupRacers
            .sort((a, b) => a.laikasMS - b.laikasMS)
            .map((elm, i) => (
              <ul className={classes.ul}>
                <Paper elevation={3} className={classes.name} key={elm.laikas}>
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
  );
};

export default ShowingRacerTime;
