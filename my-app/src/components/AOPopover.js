import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";

export const AOPopover = ({ cell, handleClick }) => {
  console.log(cell);
  const [open, setOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  useEffect(() => {
    radioValue !== "1" ? setOpen(true) : setOpen(false);
  }, [radioValue]);

  const handleClose = () => {
    setOpen(false);
    setRadioValue("1");
  };

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <Box>
      <AOCommentBase open={open} handleClose={handleClose} />
      <AOPopoverRadio onChange={handleChange} radioValue={radioValue} />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </Box>
  );
};
