import React from "react";
import { Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
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
      <CopyrightIcon style={{ color: "#1976d2" }} />
      <p>{yearNow}</p>
      <p>Visos teisės saugomos</p>
    </Container>
  );
};

export default Footer;
