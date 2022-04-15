import { useState } from "react";
import { Box, Grid } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";

export const AOCell = (cell) => {
  const [cellColour, toggleCellColour] = useState("transparent");

  const handleCellClick = (input) => {
    switch (cellColour) {
      case palette.aoBlue:
        toggleCellColour("transparent");
        break;
      case "transparent":
        toggleCellColour(palette.aoGrey);
        break;
      case palette.aoGrey:
        toggleCellColour(palette.aoYellow);
        break;
      case palette.aoYellow:
        toggleCellColour(palette.aoBlue);
        break;
      default:
    }
  };

  return (
    <Grid item sm={1} onClick={() => handleCellClick(cell)}>
      <Box
        sx={{
          ...cellSx.cell,
          backgroundColor: cellColour,
          "&:hover": {
            backgroundColor: cellColour === "transparent" && palette.aoGrey,
            opacity: "0.6",
            cursor: "pointer",
          },
        }}
      ></Box>
    </Grid>
  );
};
