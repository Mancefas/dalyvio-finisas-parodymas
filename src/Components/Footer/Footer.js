import React, { useContext } from "react";
import { Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

import Context from "../../store/Context";

const Footer = () => {
  const context = useContext(Context);
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        borderTop: 1,
        borderRadius: 5,
        borderColor: "primary.main",
      }}
    >
      <CopyrightIcon color="primary" />
      <p>{yearNow}</p>
      <p>
        {context.language === "ENG"
          ? "All rights reserved"
          : "Visos teisės saugomos"}
      </p>
    </Container>
  );
};

export default Footer;
