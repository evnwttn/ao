import { useState } from "react";
import { Box, Grid } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";

export const AOCell = (cell) => {
  const [cellColour, toggleCellColour] = useState("transparent");

  const handleCellClick = (input) => {
    cellColour === palette.aoBlue && toggleCellColour("transparent");
    cellColour === "transparent" && toggleCellColour(palette.aoGrey);
    cellColour === palette.aoGrey && toggleCellColour(palette.aoYellow);
    cellColour === palette.aoYellow && toggleCellColour(palette.aoBlue);

    console.log(input);
  };

  return (
    <Grid item sm={1} onClick={() => handleCellClick(cell)}>
      <Box
        sx={{
          ...cellSx.cell,
          backgroundColor: cellColour,
          "&:hover": {
            backgroundColor: palette.aoGrey,
            opacity: "0.4",
            cursor: "pointer",
            // boxShadow:
            //   cellColour === "transparent" &&
            //   `-1px 1px 0px 1px ${palette.aoWhite} inset`,
          },
        }}
      ></Box>
    </Grid>
  );
};
