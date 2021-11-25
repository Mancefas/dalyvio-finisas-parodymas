import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  SvgIcon,
} from "@mui/material";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AttributionIcon from "@mui/icons-material/Attribution";
import BarChartIcon from "@mui/icons-material/BarChart";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const HowItWorksSection = () => {
  return (
    <Box sx={{ minHeight: "80vh", marginBottom: "3rem" }}>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ margin: "2rem" }}
      >
        Kaip tai veikia ?{" "}
      </Typography>
      <Grid container spacing={8} sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <PhonelinkIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pateikiama informacija apie varžybas : <br /> Starto laikas,
                Distancijos, Dalyvių grupės
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Tikslinama informacija
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <AttributionIcon />
              </SvgIcon>
              <SvgIcon fontSize="large" color="info">
                <ContactMailIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pildomas dalyvių sąrašas.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Dalyvių sąrašas gali būti papildomas vietoje.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <SportsScoreIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fiksuojamas dalyvių finišo laikas telefonu/planšete prie finišo
                linijos
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Įvedamas dalyvio numeris ir tereikia spustelti{" "}
                <Button variant="contained" size="small">
                  Finišavo
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <BarChartIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Matome dalyvių finišo laikus ir prizines vietas pagal varžybų
                grupes ir distancijas.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Apdovanojami laimėtojai ir dalinamės nuotraukomis, bei šventė
                vyksta toliau.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
