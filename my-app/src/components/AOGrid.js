import { useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme from "../assets/theme";
import { palette, gridDomSx, cellSx } from "../assets/theme";
import { data } from "../assets/TestData";

export const AOGrid = () => {
  const [cellColour, toggleCellColour] = useState(palette.aoBlue);

  const handleCellClick = (input) => {
    {
      cellColour === palette.aoBlue && toggleCellColour("transparent");
      cellColour === "transparent" && toggleCellColour(palette.aoGrey);
      cellColour === palette.aoGrey && toggleCellColour(palette.aoYellow);
      cellColour === palette.aoYellow && toggleCellColour(palette.aoBlue);
    }
    console.log(input);
  };

  const AOCell = (cell) => {
    return (
      <Grid item sm={1} onClick={() => handleCellClick(cell)}>
        <Box sx={{ ...cellSx.cell, backgroundColor: cellColour }}></Box>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        marginLeft: "2.5vw",
        marginRight: "2.5vw",
        marginTop: "2.5vh",
      }}
    >
      <ThemeProvider theme={aotheme}>
        <Box sx={{ ...gridDomSx }}>
          <Grid container>
            <Grid container spacing={1}>
              {data.parameters.map((parameterTitle) => {
                return (
                  <Grid item sm={1} key={parameterTitle}>
                    <Box sx={{ ...cellSx.paraCell }}>{parameterTitle}</Box>
                  </Grid>
                );
              })}
            </Grid>
            {data.tracks.map((track) => {
              return (
                <Grid container key={track} spacing={"0.75vw"}>
                  {data.parameters.map((parameter) => {
                    return parameter === `title` ? (
                      <Grid item sm={1} key={parameter}>
                        <Box sx={{ ...cellSx.titleCell }}>{track}</Box>
                      </Grid>
                    ) : (
                      <AOCell
                        key={parameter}
                        parameter={parameter}
                        track={track}
                      />
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};
