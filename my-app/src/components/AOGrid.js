import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
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

  const location = useLocation();
  useEffect(() => {
    const { from, data } = location.state;
    from === "load" && setGridData(darkSideOfTheMoon);
    from === "new" && setGridData(data);
  }, [location.state]);

  useEffect(() => {
    console.log(gridData);
  }, [gridData]);

  const [updateColor, setUpdateColor] = useState();
  const [updateComment, setUpdateComment] = useState();
  const [updateTrack, setUpdateTrack] = useState();
  const [updateParameter, setUpdateParameter] = useState();
  const { setValue, handleSubmit } = useForm();
  const [triggerSubmit, setTriggerSubmit] = useState(false);

  useEffect(() => {
    if (triggerSubmit) {
      handleSubmit((data) => console.log(data))();
    }
  }, [triggerSubmit, handleSubmit]);

  useEffect(() => {
    updateTrack && updateFunction();
  }, [updateTrack, updateFunction]);

  const updateFunction = useCallback(() => {
    gridData.tracks.forEach((trackTitle, trackIndex) => {
      if (trackTitle.title === updateTrack) {
        gridData.tracks[trackIndex].parameters.forEach(
          (paramTitle, paramIndex) => {
            if (paramTitle.parameter === updateParameter) {
              setValue(
                `tracks.${trackIndex}.parameters.${paramIndex}.colour`,
                updateColor
              );
              setValue(
                `tracks.${trackIndex}.parameters.${paramIndex}.comment`,
                updateComment
              );
            }
          }
        );
      }
    });
  }, [
    gridData,
    setValue,
    updateTrack,
    updateComment,
    updateColor,
    updateParameter,
  ]);

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
                        setUpdateColor={setUpdateColor}
                        setUpdateComment={setUpdateComment}
                        setUpdateTrack={setUpdateTrack}
                        setUpdateParameter={setUpdateParameter}
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
