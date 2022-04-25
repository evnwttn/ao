import React from "react";
import { AOColourWheel } from "./AOColourWheel";
import { Box, Grid, Popover } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";

export const AOCell = (cell) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cellColour = "transparent";
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSpokeClick = (spoke) => {
    console.log(spoke);
  };

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
        sx={{ backdropFilter: "blur(1.5px)" }}
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
        <AOColourWheel handleClick={(spoke) => handleSpokeClick(spoke)} />
      </Popover>
    </>
  );
};
