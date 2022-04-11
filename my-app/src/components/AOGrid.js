import React from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme from "../assets/theme";
import { palette } from "../assets/theme";
import { data } from "../assets/TestData";

const styling = {
  paraCell: {
    backgroundColor: palette.aoGrey,
    color: palette.aoWhite,
    padding: 1,
  },
  titleCell: {
    backgroundColor: palette.aoGrey,
    color: palette.aoYellow,
    padding: 1,
  },
  cell: { backgroundColor: palette.aoBlue, padding: 1 },
};

const logCell = (input) => {
  console.log(input);
};

export const AOGrid = () => {
  return (
    <ThemeProvider theme={aotheme}>
      <Box sx={{ flexGrow: 2 }}>
        {data.sessionTitle}
        <Grid container>
          <Grid container spacing={1.5} direction="row">
            {data.parameters.map((parameter) => {
              return (
                <Grid item sm={1} key={parameter}>
                  <Box sx={styling.paraCell} onClick={() => logCell(parameter)}>
                    {parameter}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          {data.tracks.map((track) => {
            return (
              <Grid container key={track} spacing={1.5} direction="row">
                {data.parameters.map((cell) => {
                  return cell === `title` ? (
                    <Grid item sm={1} key={cell}>
                      <Box
                        sx={styling.titleCell}
                        onClick={() => logCell(`${track} + ${cell}`)}
                      >
                        {track}
                      </Box>
                    </Grid>
                  ) : (
                    <Grid item sm={1} key={cell}>
                      <Box
                        sx={styling.cell}
                        onClick={() => logCell(`${track} + ${cell}`)}
                      ></Box>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
