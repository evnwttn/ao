import React from "react";
import { Box } from "@mui/material/";
// import { palette } from "../assets/theme";

const data = {
  sessionTitle: "the dark side of the moon",
  track: [
    "speak to me",
    "breathe (in the air)",
    "on the run",
    "time",
    "the great gig in the sky",
    "money",
    "us and them",
    "any colour you like",
    "brain damage",
    "eclipse",
  ],
  parameter: [
    "vocals",
    "guitar",
    "bass",
    "drums",
    "piano",
    "guest players",
    "guest vocals",
    "fx",
    "mix",
    "master",
  ],
};

export const AOGrid = () => {
  return (
    <Box>
      {data.sessionTitle}
      {data.track.map((track) => {
        return <Box key={track}>{track}</Box>;
      })}
      {data.parameter.map((parameter) => {
        return <Box key={parameter}>{parameter}</Box>;
      })}
    </Box>
  );
};
