import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  SvgIcon,
  Container,
  Paper,
} from "@mui/material";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import TabletAndroidTwoToneIcon from "@mui/icons-material/TabletAndroidTwoTone";

import Context from "../../store/Context";

const HowItWorksSection = () => {
  const context = useContext(Context);
  const [secondsPassed, setSecondsPassed] = useState();
  const [showContentAfterPress, setShowContentArterPress] = useState(false);

  const dateWhenRenderComponent = Date.now();

  const randomClickHandler = () => {
    const dateFromRenderToClick = Date.now() - dateWhenRenderComponent;
    setSecondsPassed(Math.floor(dateFromRenderToClick / 1000));
    setShowContentArterPress(true);
  };

  return (
    <Box sx={{ minHeight: "80vh", marginBottom: "3rem" }}>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ margin: "2rem" }}
      >
        {context.language === "ENG" ? "How it works" : "Kaip tai veikia ?"}{" "}
      </Typography>

      <Grid container spacing={8} sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <LooksOneIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Information about race is provided.  "
                  : "Pateikiama informacija apie varžybas"}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "Race start, Distances, Race groups"
                  : " Starto laikas, Distancijos, Dalyvių grupės"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <LooksTwoIcon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Participant list is filled"
                  : "Pildomas dalyvių sąrašas."}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "Participant can be added before start of the race."
                  : "Dalyvių sąrašas gali būti papildomas vietoje."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <Looks3Icon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Record finish time at the finish line with a smartphone or tablet."
                  : "Fiksuojamas dalyvių finišo laikas telefonu arba planšete prie finišo linijos."}
              </Typography>
            </CardContent>
            <CardContent>
              <Box>
                <SvgIcon fontSize="medium">
                  <PhoneAndroidTwoToneIcon />
                </SvgIcon>
                <SvgIcon fontSize="large">
                  <TabletAndroidTwoToneIcon />
                </SvgIcon>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "Just fill race number and press  - "
                  : "Įvedamas dalyvio numeris ir tereikia spustelti - "}
                <Button
                  onClick={randomClickHandler}
                  variant="contained"
                  size="small"
                >
                  {context.language === "ENG" ? "Finished" : "Finišavo"}
                </Button>
                {/* Some box with text after Button press */}
                {showContentAfterPress && (
                  <Container maxWidth="sm" sx={{ padding: "0.5rem" }}>
                    <Paper
                      variant="outlined"
                      elevation={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle2">
                        {context.language === "ENG"
                          ? "Congrats!🎉🎉🎉 Your finishing time - "
                          : "Sveikinam!🎉🎉🎉 Tavo finišavimo laikas - "}
                        {secondsPassed}{" "}
                        {context.language === "ENG" ? "sec." : "sek."}
                      </Typography>
                      <EmojiEventsIcon color="primary" />
                    </Paper>
                  </Container>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Card>
            <CardMedia sx={{ marginTop: "1rem" }}>
              <SvgIcon fontSize="large" color="info">
                <Looks4Icon />
              </SvgIcon>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {context.language === "ENG"
                  ? "Finishing time with finishing place according to race groups and race distances is shown."
                  : "Matome dalyvių finišo laikus ir prizines vietas pagal grupes ir distancijas."}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {context.language === "ENG"
                  ? "Winners are awarded 🏆, photos are taken and it's time for celebration."
                  : "Apdovanojami laimėtojai 🏆 ir dalinamės nuotraukomis, bei šventė vyksta toliau."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
