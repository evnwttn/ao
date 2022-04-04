import React from "react";
import { Box, Grid } from "@mui/material/";

const arr = {
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
      {console.log(arr)}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        Yeah
      </Grid>
    </Box>
  );
};
