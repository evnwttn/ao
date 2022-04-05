import React from "react";
import { Box, Grid } from "@mui/material/";
import { palette } from "../assets/theme";

const styling = {
  cell: { backgroundColor: palette.aoBlack, padding: 1 },
};

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
    "tracks",
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
      {data.sessionTitle}
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid container direction="row">
          {data.parameter.map((parameter) => {
            return (
              <Grid item sm={1} key={parameter}>
                <Box sx={styling.cell}>{parameter}</Box>
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="column">
          {data.track.map((track) => {
            return (
              <Grid item key={track}>
                <Box sx={styling.cell}>{track}</Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
