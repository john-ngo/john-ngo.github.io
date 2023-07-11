import { Box, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 2
      }}
    >
      <Fade>
        <Typography variant="body2" sx={{ color: "#808080" }}>
          John Ngo © 2023
        </Typography>
      </Fade>
    </Box>
  );
}