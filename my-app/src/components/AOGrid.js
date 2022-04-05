import React from "react";
import { Box, Grid } from "@mui/material/";
// import { palette } from "../assets/theme";

const data = {
  sessionTitle: "the dark side of the moon",
  track: [
    "speak to me",
    "breathe (in the air)",
    "on the run",
    "time",
    "the great gig in the sky",
    "money",
    "us and them",
    "any colour you like",
    "brain damage",
    "eclipse",
  ],
  parameter: [
    "vocals",
    "guitar",
    "bass",
    "drums",
    "piano",
    "guest players",
    "guest vocals",
    "fx",
    "mix",
    "master",
  ],
};

export const AOGrid = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {[data].map((cell) => {
          return (
            console.log(cell.track) ||
            console.log(cell.parameter) ||
            console.log(cell.sessionTitle) ||
            console.log(cell)
          );
        })}
      </Grid>
    </Box>
  );
};
