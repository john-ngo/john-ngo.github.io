import * as React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";
import js from "../icons/js.svg";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import ts from "../icons/ts.svg";
import ruby from "../icons/ruby.svg";
import react from "../icons/react.svg";
import sql from "../icons/sql.svg";
import git from "../icons/git.svg";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function About() {
  return (
    <Card sx={{ background: "transparent", mt: 2, mb: 10, overflow: "initial" }} elevation={0}>
      <CardContentNoPadding>
        <Box sx={{ mb: 3 }}>
          <Fade>
            <Typography gutterBottom variant="h3" id="about" sx={{ fontWeight: "bold" }}>
              About
            </Typography>
          </Fade>
          <Fade>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              My name is John Ngo. I'm a full-stack web developer based in Calgary.
            </Typography>
          </Fade>
          <Fade>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              My coding journey started in high-school with Pascal. I learned some C/C++/C# in university. In 2023 I graduated from{" "}
              <Link underline="none" href="https://www.lighthouselabs.ca" rel="noreferrer" target="_blank">
                LighthouseLabs
              </Link>
              {" "}full-stack web development bootcamp.
            </Typography>
          </Fade>
          <Fade>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              I have a Master's degree in Applied system analysis from{" "}
              <Link underline="none" href="https://kpi.ua/en" rel="noreferrer" target="_blank">
                National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"
              </Link>
              .
            </Typography>
          </Fade>
        </Box>


        <Grid container columns={{ lg: 16 }}>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={js} alt="js" />
              <Typography sx={{ mb: 2 }}>
                JavaScript
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={ts} alt="ts" />
              <Typography sx={{ mb: 2 }}>
                TypeScript
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={ruby} alt="ruby" />
              <Typography sx={{ mb: 2 }}>
                Ruby
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={html} alt="html" />
              <Typography sx={{ mb: 2 }}>
                HTML
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={css} alt="css" />
              <Typography sx={{ mb: 2 }}>
                CSS
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={react} alt="react" />
              <Typography sx={{ mb: 2 }}>
                React
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={sql} alt="sql" />
              <Typography sx={{ mb: 2 }}>
                SQL
              </Typography>
            </Fade>
          </Grid>
          <Grid container xs={6} sm={4} md={3} lg={2} direction="column" alignItems="center" justifyContent="center">
            <Fade>
              <img src={git} alt="git" />
              <Typography sx={{ mb: 2 }}>
                Git
              </Typography>
            </Fade>
          </Grid>

        </Grid>
      </CardContentNoPadding>
    </Card>
  );
}