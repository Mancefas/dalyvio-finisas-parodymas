import React, { useContext } from "react";

import classes from "./RaceHeader.module.css";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking, faBicycle } from "@fortawesome/free-solid-svg-icons";

import Context from "../../store/Context";

const Header = () => {
  const context = useContext(Context);
  return (
    <header>
      <Container maxWidth="md" className={classes.cont}>
        <div className={classes.header}>
          <FontAwesomeIcon
            icon={faBiking}
            size={"2x"}
            className={classes.bike1}
          />
          <h1>
            {context.language === "ENG"
              ? "Gravel bicycle Race"
              : "Gravel dviračių varžybos"}
          </h1>
          <FontAwesomeIcon
            icon={faBicycle}
            size={"2x"}
            className={classes.bike2}
          />
        </div>
        <h3 className={classes.giriaText}>
          {context.language === "ENG"
            ? "Race distances to race at :"
            : "Varžybų distancijos :"}
        </h3>
        <h4 className={classes.kmText}> 150KM 130KM 80KM</h4>
      </Container>
    </header>
  );
};

export default Header;
