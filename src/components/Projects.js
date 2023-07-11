import * as React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";
import social_circle from "../images/social_circle.png";
import jungle from "../images/jungle.png";
import scheduler from "../images/scheduler.png";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function Projects() {
  return (
    <Box sx={{ mt: 2, mb: 10 }}>
      <Card sx={{ background: "transparent", overflow: "initial" }} elevation={0}>
        <CardContentNoPadding>
          <Fade>
            <Typography gutterBottom variant="h3" id="projects" sx={{ fontWeight: "bold" }}>
              Projects
            </Typography>
          </Fade>
        </CardContentNoPadding>
      </Card>

      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>

        <Grid container xs={12} sm={6} sx={{ mb: 4, justifyContent: "left" }}>
          <Card sx={(theme) => ({
            width: 0.95,
            [theme.breakpoints.down("sm")]: {
              width: 1
            }
          })}>
            <Fade>
              <CardActionArea href="https://github.com/john-ngo/Social-Circle" rel="noreferrer" target="_blank">
                <CardMedia
                  component="img"
                  image={social_circle}
                  alt="Social Circle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Social Circle
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    A social media platform for people to connect with each other. Users can send private messages or make a post to share their thoughts.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" sx={{ color: "#4e7ab5", pr: 1, display: "inline-block" }}>#React</Box>
                    <Box component="span" sx={{ color: "#fa5252", pr: 1, display: "inline-block" }}>#Rails</Box>
                    <Box component="span" sx={{ color: "#5090D3", pr: 1, display: "inline-block" }}>#MUI</Box>
                    <Box component="span" sx={{ color: "#c52f24", pr: 1, display: "inline-block" }}>#ActiveRecord</Box>
                    <Box component="span" sx={{ color: "#699eca", pr: 1, display: "inline-block" }}>#PostgreSQL</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Fade>
          </Card>
        </Grid>

        <Grid container xs={12} sm={6} sx={{ mb: 4, justifyContent: "right" }}>
          <Card sx={(theme) => ({
            width: 0.95,
            [theme.breakpoints.down("sm")]: {
              width: 1
            }
          })}>
            <Fade>
              <CardActionArea href="https://github.com/john-ngo/jungle-rails" rel="noreferrer" target="_blank">
                <CardMedia
                  component="img"
                  image={jungle}
                  alt="Jungle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jungle
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    An e-commerce application for plant lovers. Users can place an order via an integrated payment system.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" sx={{ color: "#fcc419", pr: 1, display: "inline-block" }}>#JavaScript</Box>
                    <Box component="span" sx={{ color: "#fa5252", pr: 1, display: "inline-block" }}>#Rails</Box>
                    <Box component="span" sx={{ color: "#CF649A", pr: 1, display: "inline-block" }}>#SCSS</Box>
                    <Box component="span" sx={{ color: "#699eca", pr: 1, display: "inline-block" }}>#PostgreSQL</Box>
                    <Box component="span" sx={{ color: "#5d69e3", pr: 1, display: "inline-block" }}>#Stripe</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Fade>
          </Card>
        </Grid>

        <Grid container xs={12} sm={6} sx={{ justifyContent: "left" }}>
          <Card sx={(theme) => ({
            width: 0.95,
            [theme.breakpoints.down("sm")]: {
              width: 1
            }
          })}>
            <Fade>
              <CardActionArea href="https://github.com/john-ngo/scheduler" rel="noreferrer" target="_blank">
                <CardMedia
                  component="img"
                  image={scheduler}
                  alt="Scheduler"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Scheduler
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    An application for users to book, edit or delete interviews.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" sx={{ color: "#fcc419", pr: 1, display: "inline-block" }}>#JavaScript</Box>
                    <Box component="span" sx={{ color: "#84ba64", pr: 1, display: "inline-block" }}>#Node.js</Box>
                    <Box component="span" sx={{ color: "#CF649A", pr: 1, display: "inline-block" }}>#SCSS</Box>
                    <Box component="span" sx={{ color: "#699eca", pr: 1, display: "inline-block" }}>#PostgreSQL</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Fade>
          </Card>
        </Grid>
      </Grid >
    </Box>
  );
}