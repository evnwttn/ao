import React from "react";
import { useState } from "react";
import { AOColourWheel } from "./AOColourWheel";
import { Box, Grid, Popover } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";

export const AOCell = (cell) => {
  const [cellColour, toggleCellColour] = useState("transparent");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid item sm={1} onClick={handleClick}>
        <Box
          aria-describedby={cell}
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <AOColourWheel cellColour={cellColour} />
      </Popover>
    </>
  );
};
