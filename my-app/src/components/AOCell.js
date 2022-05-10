import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Box, Grid, Popover } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";
import { AOPopover } from "./AOPopover";

export const AOCell = (cell) => {
  // HANDLES CELL COLOUR
  const [cellColor, setCellColor] = useState(palette.aoBlack);

  // HANDLES POPOVER
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // HANDLES COMMENT STORAGE
  const { register, handleSubmit } = useForm();
  const [cellComment, setCellComment] = useState("");
  const onSubmit = (data) => setCellComment(data.comment);
  cellComment !== "" && console.log(`${cell} + ${cellComment}`);

  return (
    <>
      <Grid item sm={1} onClick={handleClick}>
        <Box
          aria-describedby={cell}
          sx={{
            ...cellSx.cell,
            backgroundColor: cellColor,
            "&:hover": {
              backgroundColor: cellColor === palette.aoBlack && palette.aoGrey,
              opacity: "0.6",
              cursor: "pointer",
            },
          }}
        ></Box>
      </Grid>
      <Popover
        sx={{
          backdropFilter: "blur(1.5px)",
          left: "0.35vw",
          top: "-1.15vw",
        }}
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
        <AOPopover
          cell={cell}
          handleClick={(color) => setCellColor(color)}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </Popover>
    </>
  );
};
