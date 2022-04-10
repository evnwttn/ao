import React from "react";
import { Box, Grid } from "@mui/material/";
import { palette } from "../assets/theme";

const styling = {
  cell: { backgroundColor: palette.aoBlue, padding: 1 },
};

const data = {
  sessionTitle: "the dark side of the moon",
  tracks: [
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
  parameters: [
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
    <Box sx={{ flexGrow: 1 }}>
      {data.sessionTitle}
      <Grid container>
        <Grid container spacing={2} direction="row">
          {data.parameters.map((parameter) => {
            return (
              <Grid item sm={1} key={parameter}>
                <Box sx={styling.cell}>{parameter}</Box>
              </Grid>
            );
          })}
        </Grid>
        {data.tracks.map((track) => {
          return (
            <Grid container key={track} spacing={2} direction="row">
              {data.parameters.map((cell) => {
                return (
                  <Grid item sm={1} sx={{ my: 2 }} key={cell}>
                    <Box sx={styling.cell}></Box>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
