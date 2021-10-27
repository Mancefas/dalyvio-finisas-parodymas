import classes from "./Header.module.css";
import React from "react";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking, faBicycle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Container maxWidth="md">
        <div className={classes.header}>
          <FontAwesomeIcon
            icon={faBiking}
            size={"2x"}
            className={classes.bike1}
          />
          <h1>Gravel investicijų fondas</h1>
          <FontAwesomeIcon
            icon={faBicycle}
            size={"2x"}
            className={classes.bike2}
          />
        </div>
        <h3 className={classes.giriaText}>KAZLŲ RŪDOS GIRIA</h3>
        <h4 className={classes.kmText}>80KM 130KM</h4>
      </Container>
    </header>
  );
};

export default Header;
