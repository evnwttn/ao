import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";

export const AOPopover = ({ cell, handleClick }) => {
  // POPOVER

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setRadioValue("1");
  };

  // RADIO SWITCH

  const [radioValue, setRadioValue] = useState("1");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  useEffect(() => {
    radioValue !== "1" ? setOpen(true) : setOpen(false);
  }, [radioValue]);

  // COMMENTS

  const [comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Box>
      <AOCommentBase
        cell={cell}
        open={open}
        handleClose={handleClose}
        comment={comment}
        onChange={handleCommentChange}
      />
      <AOPopoverRadio onChange={handleChange} radioValue={radioValue} />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </Box>
  );
};
