import * as React from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

function createData(position, company, date, task1, task2) {
  return { position, company, date, task1, task2 };
}

const rows = [
  createData(
    "QA Engineer",
    "Oddity",
    "Dec 2020 - Oct 2022",
    "Performed manual testing of a web application (functional, non-functional, system integration testing).",
    "Wrote automation tests using code-free testing tool."
  ),
  createData(
    "Business analyst",
    "Mobidone",
    "Aug 2019 - Feb 2019",
    "Gathered business and functional requirements from internal and external stakeholders.",
    "Prepared documents for projects."
  ),
  createData(
    "Business analyst",
    "Delta-M",
    "June 2018 - Nov 2018",
    "Gathered and documented business and functional requirements from internal and external stakeholders.",
    "Set up a customizable CRM system according to clients' requirements."
  )
];

export default function Experience() {
  return (
    <Box sx={{ mt: 2, mb: 10 }}>
      <Card sx={{ background: "transparent", overflow: "initial" }} elevation={0}>
        <CardContentNoPadding>
          <Fade>
            <Typography gutterBottom variant="h3" id="experience" sx={{ fontWeight: "bold" }}>
              Experience
            </Typography>
          </Fade>
        </CardContentNoPadding>
      </Card>

      <Fade>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.company}>
                  <TableRow
                    sx={{ display: { xs: "none", sm: "inherit" } }}
                  >
                    <TableCell
                      sx={(theme) => ({
                        verticalAlign: "top",
                        [theme.breakpoints.up("lg")]: {
                          whiteSpace: "nowrap"
                        },
                        [theme.breakpoints.down("lg")]: {
                          width: "160px"
                        }
                      })}>
                      <Typography variant="h6" color="text.secondary" gutterBottom>{row.date}</Typography>
                    </TableCell>
                    <TableCell
                      sx={(theme) => ({
                        [theme.breakpoints.up("lg")]: {
                          width: "100%"
                        }
                      })}>
                      <Typography variant="h6" gutterBottom>{row.position} · {row.company}</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>{row.task1}</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>{row.task2}</Typography>
                    </TableCell>

                  </TableRow >

                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      display: { xs: "inherit", sm: "none" }
                    }}
                  >
                    <TableCell>
                      <Typography variant="h6" gutterBottom>{row.position} · {row.company}</Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 1 }}>{row.date}</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>{row.task1}</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>{row.task2}</Typography>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
      </Fade>
    </Box>
  );
}