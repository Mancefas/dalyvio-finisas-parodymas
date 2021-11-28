import React, { useState } from "react";
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

const HowItWorksSection = () => {
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
        Kaip tai veikia ?{" "}
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
                <LooksTwoIcon />
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
                <Looks3Icon />
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
                <Button
                  onClick={randomClickHandler}
                  variant="contained"
                  size="small"
                >
                  Finišavo
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
                        Sveikinam finišo laikas {secondsPassed} sek.
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
