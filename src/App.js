import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#030014"
    }
  }
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={(theme) => ({
        my: 2,
        maxWidth: "lg",
        [theme.breakpoints.down("lg")]: {
          maxWidth: "md"
        }
      })}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Offset />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
