import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { gridSx, cellSx } from "../assets/theme";
import aotheme from "../assets/theme";
import { AOCell } from "./AOCell";
import { AONav } from "./AONav";
import { blankSession } from "../assets/BlankSession";
import { darkSideOfTheMoon } from "../assets/LoadSample";

// width of title/parameter text cells needs to be limited to avoid overflow

export const AOGrid = () => {
  // HANDLES LOADING GRID DATA
  const location = useLocation();
  const [gridData, setGridData] = useState(blankSession);

  useEffect(() => {
    const { from, data } = location.state;
    data && console.log(data);
    from === "load" && setGridData(darkSideOfTheMoon);
    from === "new" && setGridData(data);
  }, [location.state]);

  // HANDLES CELL HOVERING FX
  const [hovered, setHovered] = useState(false);
  const toggleHovered = () => setHovered(!hovered);
  const [hoverCell, setHoverCell] = useState();

  return (
    <Box
      sx={{
        ...gridSx.container,
      }}
    >
      <ThemeProvider theme={aotheme}>
        <AONav />
        <Box sx={{ ...gridSx.dom }}>
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
