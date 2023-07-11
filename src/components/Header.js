import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Container, Box, Toolbar, IconButton, Link, Drawer, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Fade } from "react-awesome-reveal";

const pages = ["Home", "About", "Experience", "Projects", "Contact"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleClickNavMenu = (id) => {
    setAnchorElNav(null);
    setTimeout(() => {
      let el = document.getElementById(id);
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  React.useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <AppBar position="fixed" elevation={0} sx={{ background: "#030014" }}>
      <Container sx={(theme) => ({
        my: 2,
        maxWidth: "lg",
        [theme.breakpoints.down("lg")]: {
          maxWidth: "md"
        }
      })}>
        <Fade>
          <Toolbar
            disableGutters
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                justifyContent: "flex-end"
              }
            })}>

            {/* menu mobile */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ display: { xs: 'block', md: 'none', }, }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              variant="temporary"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              onOpen={handleOpenNavMenu}
            >
              <Box>
                <IconButton sx={{ my: 3, ml: 1 }}>
                  <CloseIcon onClick={handleCloseNavMenu} />
                </IconButton>
                <Divider />
                {pages.map((page) => (
                  <Link
                    component={RouterLink}
                    to={"#" + page.toLowerCase()}
                    onClick={() => { handleClickNavMenu(page.toLowerCase()); }}
                    underline="none"
                    key={page}
                    sx={{ my: 5, mx: 2, color: "white", display: "block", px: 3 }}
                  >
                    {page}
                  </Link>
                ))}
              </Box>
            </Drawer>

            {/* page links */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  component={RouterLink}
                  to={"#" + page.toLowerCase()}
                  onClick={() => {
                    let el = document.getElementById(page.toLowerCase());
                    el && el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  underline="none"
                  key={page}
                  sx={{ my: 2, color: "white", display: "block", px: 3 }}
                >
                  {page}
                </Link>
              ))}
            </Box>

          </Toolbar>
        </Fade>
      </Container>
    </AppBar>
  );
}
