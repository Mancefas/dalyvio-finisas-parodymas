import React, { useContext } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import logoImg from "../../img/logo.png";

import Context from "../../store/Context";

import { Link } from "react-router-dom";

const Header = () => {
  const context = useContext(Context);

  const handleChange = (event) => {
    context.setLanguage(event.target.value);
  };

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
        flexDirection: { xs: "row", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: 1,
        borderRadius: 3,
        borderColor: "primary.main",
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
          <img src={logoImg} alt="" height="75vh" width="auto" />
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box variant="contained">
          <Link
            style={{
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            // className={(navData) => (navData.isActive ? classes.link : "")}
            to="/gravel-race"
          >
            <Typography variant="button" color="primary">
              {context.language === "ENG" ? "Results-sample" : "Rezultatai-pvz"}
            </Typography>
          </Link>
        </Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <Link
            style={{
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            // className={(navData) => (navData.isActive ? classes.link : "")}
            to="/gravelonas"
          >
            <Typography variant="button" color="primary">
              {context.language === "ENG" ? "Gravelonas" : "Gravelonas"}
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button disabled="true" size="small" variant="outlined">
          {context.language === "ENG" ? "log in" : "prisijungti"}
        </Button>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            {context.language === "ENG" ? "Language" : "Kalba"}
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={context.language}
            onChange={handleChange}
            autoWidth
            label="Language"
          >
            <MenuItem value={"ENG"}>ENG</MenuItem>
            <MenuItem value={"LTU"}>LTU</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Header;
