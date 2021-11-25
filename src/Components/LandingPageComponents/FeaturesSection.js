import React from "react";
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

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        width: "100vw",
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
                Finišo laiko fiksavimas telefonu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Laiko finišavimui tereikia telefono arba planšetinio kompiuterio
                ir laiku paspausti finišavimo mygtuką.
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
                Rezultatai gyvai svetainėje
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rezultatai su finišavimo vietomis rodomi gyvai. Taip pat galima
                fiksuoti tarpinius rezultatus.
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
                Greitas paruošimas varžyboms
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jokių laidų, papildomos elektronikos. Tik žmogus su telefonu
                rankoje ties finišo linija...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
