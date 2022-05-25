import { useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { gridDomSx, cellSx } from "../assets/theme";
import aotheme from "../assets/theme";
import { AOCell } from "./AOCell";
import { sampleData } from "../assets/TestData";

export const AOGrid = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => setHovered(!hovered);
  const [hoverCell, setHoverCell] = useState();

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
            <Grid container spacing={"0.75vw"}>
              {sampleData.parameters.map((parameterTitle) => {
                return (
                  <Grid item sm={1} key={parameterTitle}>
                    <Box
                      sx={{
                        ...cellSx.paraCell,
                      }}
                    >
                      {parameterTitle}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            {sampleData.tracks.map((track, parameter) => {
              return (
                <Grid container key={track.title} spacing={"0.75vw"}>
                  {sampleData.parameters.map((parameter) => {
                    return parameter === `title` ? (
                      <Grid item sm={1} key={parameter}>
                        <Box
                          sx={{
                            ...cellSx.titleCell,
                          }}
                        >
                          {track.title}
                        </Box>
                      </Grid>
                    ) : (
                      <AOCell
                        key={parameter}
                        cell={{ track, parameter }}
                        track={track}
                        parameter={parameter}
                        toggleHovered={toggleHovered}
                        setHoverCell={setHoverCell}
                        hoverCell={hoverCell}
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
