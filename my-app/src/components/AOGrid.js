import React from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme from "../assets/theme";
import { palette } from "../assets/theme";
import { data } from "../assets/TestData";

const styling = {
  paraCell: {
    backgroundColor: palette.aoGrey, //temporary
    color: palette.aoWhite,
  },
  titleCell: {
    backgroundColor: palette.aoGrey, //temporary
    color: palette.aoYellow,
    my: 1,
  },
  cell: {
    backgroundColor: palette.aoBlue, //temporary
    my: 1,
    padding: 2,
  },
};

const logCell = (input) => {
  console.log(input);
};

export const AOGrid = () => {
  return (
    <ThemeProvider theme={aotheme}>
      <Box
        sx={{
          display: "flex",
          fontFamily: "Noto Sans",
          fontSize: "0.8vw",
          letterSpacing: "0.125vw",
          textAlign: "center",
          textTransform: "uppercase",
          flexGrow: 1,
        }}
      >
        <Grid container>
          <Grid container spacing={1}>
            {data.parameters.map((parameter) => {
              return (
                <Grid item sm={1} key={parameter}>
                  <Box sx={styling.paraCell} onClick={() => logCell(parameter)}>
                    {parameter}
                  </Box>
                </Grid> // SPACING FINE
              );
            })}
          </Grid>
          {data.tracks.map((track) => {
            return (
              <Grid container key={track} spacing={1}>
                {data.parameters.map((cell) => {
                  return cell === `title` ? (
                    <Grid item sm={1} key={cell}>
                      <Box sx={styling.titleCell}>{track}</Box>
                    </Grid> // SPACING FINE
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
