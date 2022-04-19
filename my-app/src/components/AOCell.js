import React from "react";
import { useState } from "react";
import { Box, Grid, Popover } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";

export const AOCell = (cell) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cellColour = palette.aoGrey;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event);
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
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <>HELLOHELLOHELLO</>
      </Popover>
    </>
  );
};

// const [cellColour, toggleCellColour] = useState("transparent");

// const handleCellClick = (input) => {
//   switch (cellColour) {
//     case palette.aoBlue:
//       toggleCellColour("transparent");
//       break;
//     case "transparent":
//       toggleCellColour(palette.aoGrey);
//       break;
//     case palette.aoGrey:
//       toggleCellColour(palette.aoYellow);
//       break;
//     case palette.aoYellow:
//       toggleCellColour(palette.aoBlue);
//       break;
//     default:
//   }
// };
