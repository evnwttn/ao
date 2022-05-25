import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Box, Grid, Popover } from "@mui/material/";
import { palette, cellSx } from "../assets/theme";
import { AOPopover } from "./AOPopover";

export const AOCell = ({
  cell,
  track,
  parameter,
  toggleHovered,
  setHoverCell,
  hoverCell,
}) => {
  // HANDLES CELL COLOUR
  const [cellColor, setCellColor] = useState("transparent");

  // HANDLES POPOVER
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(cell);
    console.log(track);
    console.log(parameter);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // HANDLES COMMENT STORAGE
  const { register, handleSubmit } = useForm();
  const [cellComment, setCellComment] = useState("");
  const onSubmit = (data) => setCellComment(data.comment);

  return (
    <>
      <Grid
        item
        sm={1}
        onClick={handleClick}
        onMouseEnter={() => setHoverCell(cell)}
        onMouseLeave={toggleHovered}
      >
        <Box
          aria-describedby={cell}
          sx={{
            backgroundColor: cellColor,
            ...cellSx.cell,
            boxShadow:
              // triggers cell hover effects
              (hoverCell && hoverCell.track === cell.track) ||
              (hoverCell && hoverCell.parameter === cell.parameter)
                ? `0 0 0.45vw 0.2vw rgb(243, 239, 224, 0.05)`
                : ``,
            ...(cellColor !== palette.aoGrey && cellColor !== "transparent"
              ? cellComment !== "" && cellSx.comment
              : cellComment !== "" && cellSx.commentInverse),
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
          top: "1.5vw",
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
