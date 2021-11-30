import React, { useContext } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
} from "@mui/material";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import InsightsIcon from "@mui/icons-material/Insights";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BoltIcon from "@mui/icons-material/Bolt";

import Context from "../../store/Context";

const FeaturesSection = () => {
  const context = useContext(Context);
  return (
    <Box
      sx={{
        minHeight: "65vh",
        height: "fitContent",
        width: "fitContent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "auto",
        padding: "2rem",
        backgroundImage:
          "linear-gradient(147deg, #dfe8eb 25%, #f0f0f0 25%, #f0f0f0 50%, #dfe8eb 50%, #dfe8eb 75%, #f0f0f0 75%, #f0f0f0 100%)",
        backgroundSize: "146.89px 95.39px",
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        <Grid item>
          <Card sx={{ maxWidth: 345, padding: "1rem" }}>
            <CardMedia height="140">
              <SvgIcon fontSize="large" color="info">
                <PhonelinkIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Record finish time with no sensors "
                  : "Finišo laiko fiksavimas be daviklių"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "To get finish time you only need a smartphone or tablet and to press finish button."
                  : "Laiko finišavimui tereikia telefono arba planšetinio kompiuterio ir paspausti finišavimo mygtuką."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 345, padding: "1rem" }}>
            <CardMedia height="140">
              <SvgIcon fontSize="large" color="info">
                <InsightsIcon />
              </SvgIcon>
              <SvgIcon fontSize="large" color="info">
                <MilitaryTechIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Results are live on the website"
                  : "Rezultatai gyvai svetainėje"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "Results with finishing place are shown live. There is a possibility to show intermediate results."
                  : "Rezultatai su finišavimo vietomis rodomi gyvai. Taip pat galima fiksuoti tarpinius rezultatus."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 345, padding: "1rem" }}>
            <CardMedia height="140">
              <SvgIcon fontSize="large" color="info">
                <BoltIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Fast preparation for race"
                  : "Greitas paruošimas varžyboms"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "No wires, additional electronic devices are needed. Only a man with a smartphone at the finish line..."
                  : "Jokių laidų, papildomos elektronikos. Tik žmogus su telefonu rankoje ties finišo linija..."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
