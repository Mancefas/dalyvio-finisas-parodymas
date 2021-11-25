import React from "react";
import bgImg from "../../img/tt.jpg";
import phone from "../../img/phone.png";
import { Box } from "@mui/material";

const ImageSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          height: "10rem",
        }}
      >
        <img src={phone} height="100%" width="auto" />
      </Box>
    </Box>
  );
};

export default ImageSection;
