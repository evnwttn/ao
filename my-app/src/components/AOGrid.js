import { useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { gridDomSx, cellSx } from "../assets/theme";
import aotheme from "../assets/theme";
import { AOCell } from "./AOCell";
import { data } from "../assets/TestData";
import { sampleData } from "../assets/TestData";

console.log(sampleData);

console.log(data);

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
            {data.tracks.map((track) => {
              return (
                <Grid container key={track} spacing={"0.75vw"}>
                  {data.parameters.map((parameter) => {
                    return parameter === `title` ? (
                      <Grid item sm={1} key={parameter}>
                        <Box
                          sx={{
                            ...cellSx.titleCell,
                          }}
                        >
                          {track}
                        </Box>
                      </Grid>
                    ) : (
                      <AOCell
                        key={parameter}
                        cell={{ track, parameter }}
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
