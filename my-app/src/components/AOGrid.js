import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme, { gridSx, cellSx } from "../assets/theme";
import { AOCell } from "./AOCell";
import { AONav } from "./AONav";
import { blankSession } from "../assets/dummydata/BlankSession";
import { darkSideOfTheMoon } from "../assets/dummydata/LoadSample";

export const AOGrid = () => {
  const [gridData, setGridData] = useState(blankSession);
  const [hoverCell, setHoverCell] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const toggleHovered = () => setIsHovered(!isHovered);

  // update ZONE
  const [updateCell, setUpdateCell] = useState();
  const [updateColor, setUpdateColor] = useState();
  const [updateComment, setUpdateComment] = useState();
  useEffect(() => {
    updateColor && console.log(updateColor);
    updateComment && console.log(updateComment);
  }, [updateCell, updateColor, updateComment]);

  const location = useLocation();
  useEffect(() => {
    const { from, data } = location.state;
    from === "load" && setGridData(darkSideOfTheMoon);
    from === "new" && setGridData(data);
  }, [location.state]);

  return (
    <Box sx={gridSx.container}>
      <ThemeProvider theme={aotheme}>
        <AONav data={gridData} />
        <Box sx={gridSx.dom}>
          <Grid container>
            <Grid
              sx={{
                flexFlow: "row nowrap",
                justifyContent: "center",
              }}
              container
              spacing={"0.75vw"}
            >
              {gridData.parameters.map((parameterTitle) => {
                return (
                  <Grid item sm={1} key={parameterTitle}>
                    <Box sx={cellSx.paraCell}>{parameterTitle}</Box>
                  </Grid>
                );
              })}
            </Grid>
            {gridData.tracks.map((track, parameter) => {
              return (
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "center",
                  }}
                  key={track.title}
                  spacing={"0.75vw"}
                >
                  {gridData.parameters.map((parameter) => {
                    return parameter === `title` ? (
                      <Grid item sm={1} key={parameter}>
                        <Box sx={cellSx.titleCell}>{track.title}</Box>
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
                        gridData={gridData}
                        setUpdateCell={setUpdateCell}
                        setUpdateColor={setUpdateColor}
                        setUpdateComment={setUpdateComment}
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
