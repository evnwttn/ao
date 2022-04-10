import React from "react";
import { Box, Grid } from "@mui/material/";
import { palette } from "../assets/theme";
import { data } from "../assets/TestData";

// tomorrow:
// build out grid/cells
// once styling established shift to theme.js
// if time, be mindful of onClick colourwheel

const styling = {
  cell: { backgroundColor: palette.aoBlue, padding: 1 },
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
