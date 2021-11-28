import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "15vh",
        height: "fit-content",
        marginBottom: "1rem",
        gap: "1rem",
        backgroundColor: "#FEFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
          to="/"
        >
          <FontAwesomeIcon icon={faFlagCheckered} size={"2x"} />

          <PhoneAndroidIcon color="primary" />
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box variant="contained">
          <Link
            style={{
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#primary",
            }}
            // className={(navData) => (navData.isActive ? classes.link : "")}
            to="/gif-kazlu-ruda"
          >
            <Typography variant="button" color="primary">
              Varžybos
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="outlined">Prisijungti</Button>
      </Box>
    </Container>
  );
};

export default Header;
