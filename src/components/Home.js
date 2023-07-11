import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";
import me from "../images/me.jpg";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function Home() {
  return (
    <Card id="home" sx={{ background: "transparent", mt: 2, mb: 10, overflow: "initial", scrollMarginTop: "96px" }} elevation={0}>
      <CardContentNoPadding>
        <Fade>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid container xs={12} sm={7} md={6} sx={{ display: "block" }}>
              <Typography gutterBottom variant="h3" sx={{ fontWeight: "bold" }}
              >
                Hi, I'm John.
              </Typography>
              <Typography gutterBottom variant="h4">
                I'm a full-stack web developer.
              </Typography>
            </Grid>
            <Grid container sm={5} md={6}>
              <CardMedia
                component="img"
                alt="My picture"
                src={me}
                sx={{ backgroundSize: 'contain' }}
              />
            </Grid>
          </Grid>
        </Fade>
      </CardContentNoPadding>
    </Card>
  );
}