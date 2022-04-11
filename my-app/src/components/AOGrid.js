import { useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme from "../assets/theme";
import { palette, gridDomSx, cellSx } from "../assets/theme";
import { data } from "../assets/TestData";

export const AOGrid = () => {
  const logCell = (input) => {
    console.log(input);
  };

  const [toggleColour, setToggleColour] = useState();

  const handleCellClick = (input) => {
    console.log(input);
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
              {data.parameters.map((parameter) => {
                return (
                  <Grid item sm={1} key={parameter}>
                    <Box sx={{ ...cellSx.paraCell }}>{parameter}</Box>
                  </Grid>
                );
              })}
            </Grid>
            {data.tracks.map((track) => {
              return (
                <Grid container key={track} spacing={1}>
                  {data.parameters.map((cell) => {
                    return cell === `title` ? (
                      <Grid item sm={1} key={cell}>
                        <Box sx={{ ...cellSx.titleCell }}>{track}</Box>
                      </Grid>
                    ) : (
                      <Grid item sm={1} key={cell}>
                        <Box
                          sx={{ ...cellSx.cell }}
                          onClick={() => handleCellClick(`${track} + ${cell}`)}
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
    </Box>
  );
};
