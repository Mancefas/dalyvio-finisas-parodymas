import React, { useContext } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import Context from "../store/Context";

const NoPage = () => {
  const context = useContext(Context);
  return (
    <Container sx={{ minHeight: "72vh" }}>
      <Box>
        <Typography variant="h3" sx={{ fontSize: "5rem" }}>
          404
        </Typography>
        <FontAwesomeIcon icon={faGhost} size="3x" color="gray" />
        <Typography variant="h4">
          {context.language === "ENG"
            ? "Ohh we are lost..."
            : "Ups pasiklydom..."}{" "}
        </Typography>
        <Typography variant="overline">
          {context.language === "ENG"
            ? "There is no page with this name"
            : "Tokio puslapio nėra"}{" "}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box m="1rem">
            {/* Reikia isivesti email kai bus susisiekti!!! */}
            <Button variant="outlined" href="mailto:">
              {context.language === "ENG" ? "Contect us" : "Susisiekti"}
            </Button>
          </Box>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Button variant="contained">
              {" "}
              {context.language === "ENG" ? "Go back" : "Į pradžią"}
            </Button>{" "}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default NoPage;
