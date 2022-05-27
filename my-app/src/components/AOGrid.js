import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { gridDomSx, cellSx } from "../assets/theme";
import aotheme from "../assets/theme";
import { AOCell } from "./AOCell";
import { sampleData } from "../assets/TestData";
import { darkSideOfTheMoon } from "../assets/LoadSample";

// remaining issues for REACT

// width of title/parameter text cells needs to be limited to avoid overflow
// # of parameters needs to be limited @ NewModal to prevent overflow
// vertical scrolling on # of tracks works seemlessly, but needs a e s t h e t i c
// get a second opinion on the grid highlight, it's merely somewhat sick

// configure NewModal to order data as per Test/LoadSample formatting

// hook up routing of NEW to aogrid passing in the data
// if from new, use data props
// having a blank shell for the time being might be a good backup incase errors

export const AOGrid = () => {
  // HANDLES LOADING GRID DATA
  const location = useLocation();
  const [gridData, setGridData] = useState(sampleData);

  useEffect(() => {
    const { from } = location.state;
    from === "load" && setGridData(darkSideOfTheMoon);
  }, [location.state]);

  // HANDLES CELL HOVERING FX

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
              {gridData.parameters.map((parameterTitle) => {
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
            {gridData.tracks.map((track, parameter) => {
              return (
                <Grid container key={track.title} spacing={"0.75vw"}>
                  {gridData.parameters.map((parameter) => {
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
