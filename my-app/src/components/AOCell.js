import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
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
  // HANDLES CELL COLOUR & INITIAL "LOAD" DATA
  const [cellColor, setCellColor] = useState(palette.aoGrey);

  useEffect(() => {
    const initialData = () => {
      track.parameters &&
        track.parameters.map(
          (cell) =>
            (cell.parameter === parameter && setCellColor(cell.colour)) ||
            (cell.comment &&
              cell.parameter === parameter &&
              setCellComment(cell.comment))
        );
    };
    initialData();
  }, [parameter, track.parameters]);

  // HANDLES COMMENT STORAGE
  const { register, handleSubmit } = useForm();
  const [cellComment, setCellComment] = useState("");
  const onSubmit = (data) => setCellComment(data.comment);

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

  // HANDLES HOVER FX TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverCell(undefined);
    }, 1000);
    return () => clearTimeout(timer);
  }, [toggleHovered, setHoverCell]);

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
                ? `0 0 0.5vw 0.2vw rgb(243, 239, 224, 0.125)`
                : ``,
            transition:
              (hoverCell && hoverCell.track === cell.track) ||
              (hoverCell && hoverCell.parameter === cell.parameter)
                ? "box-shadow 0.025s linear"
                : "box-shadow 0.1s linear",
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
          cellComment={cellComment}
          handleClick={(color) => setCellColor(color)}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </Popover>
    </>
  );
};
