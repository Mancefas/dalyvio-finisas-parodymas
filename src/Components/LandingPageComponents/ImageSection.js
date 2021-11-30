import React from "react";
import bgImg from "../../img/tt.jpg";
import phone from "../../img/phone.png";
import { Box } from "@mui/material";

const ImageSection = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "70vw",
        margin: "auto",
        marginBottom: "15vh",
        borderRadius: "7px",
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
          height: "18vh",
        }}
      >
        <img src={phone} alt="" height="100%" width="auto" />
      </Box>
    </Box>
  );
};

export default ImageSection;
