import { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, Box, CardMedia, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Fade } from "react-awesome-reveal";
import earth from "../images/earth.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const status = document.getElementById("email-status");

    document.getElementById("send-button").disabled = true;

    emailjs.send("service_jqe5xpu", "template_n1y0ii5", { from_name: name, message: message, email: email }, "aaDEED1Nd6rs2tmst")
      .then((result) => {
        console.log(result.text);
        status.style.color = "green";
        status.innerHTML = "Your message has been sent.";
        clearForm();
        document.getElementById("send-button").disabled = false;
      }, (error) => {
        console.log(error.text);
        status.style.color = "red";
        status.innerHTML = "Sorry, there was a problem with your request. Please try again later.";
        document.getElementById("send-button").disabled = false;
      });
  };

  return (
    <Box sx={{ mt: 2, mb: 10 }}>
      <Fade>
        <Typography gutterBottom variant="h3" id="contact" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
      </Fade>
      <Fade>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Have a question? Send an email to{" "}
          <Link underline="none" href="mailto:ngoxd97@gmail.com" target="_top" rel="noreferrer">ngoxd97@gmail.com</Link>
          {" "} or fill in the form below.
        </Typography>
      </Fade>
      <Grid container sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Grid container xs={12} md={7} direction="column" >
          <Fade>
            <Box>
              <form onSubmit={handleSubmit} id="contact-form">
                <TextField
                  fullWidth
                  label="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Grid container direction="row" alignItems="center" sx={{ mt: 2 }}>
                  <Button variant="contained" type="submit" id="send-button" sx={{ width: "120px" }}>
                    Send
                  </Button>
                  <Typography id="email-status" sx={{ pl: "20px", fontWeight: "bold" }}></Typography>
                </Grid>
              </form>
            </Box>
          </Fade>
        </Grid>

        <Grid container md={4} direction="column" alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
          <Fade>
            <CardMedia
              component="img"
              image={earth}
              alt="Earth"
              height="90%"
            />
          </Fade>
        </Grid>
      </Grid >
    </Box>
  );
}