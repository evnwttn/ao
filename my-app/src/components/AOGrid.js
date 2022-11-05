import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import aotheme, { gridSx, cellSx } from "../assets/theme";
import { AONav, AOCell } from "./index";

export const AOGrid = () => {
  const axios = require("axios").default;
  const location = useLocation();
  const [gridData, setGridData] = useState(location.state.data);
  const [userDataVerified] = useState(location.state.user);

  const [hoverCell, setHoverCell] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const toggleHovered = () => setIsHovered(!isHovered);

  const [updateColor, setUpdateColor] = useState();
  const [updateComment, setUpdateComment] = useState();
  const [updateTrack, setUpdateTrack] = useState();
  const [updateParameter, setUpdateParameter] = useState();
  const { setValue, handleSubmit } = useForm({
    defaultValues: gridData,
  });

  const updateSessionData = () => {
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
    handleSubmit((data) => data && setGridData(data))();
    sendData();
  };

  const sendData = () => {
    axios
      .put(`http://localhost:5000/session`, {
        ...gridData,
      })
      .then((data) => console.log(data.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box sx={gridSx.container}>
      <ThemeProvider theme={aotheme}>
        <AONav gridData={gridData} userData={userDataVerified} />
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
                        updateSessionData={updateSessionData}
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
