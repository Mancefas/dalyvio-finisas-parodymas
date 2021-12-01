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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

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
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: 1,
        borderRadius: 5,
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
              {context.language === "ENG" ? "Races" : "Varžybos"}
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="outlined">
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
