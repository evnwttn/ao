import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";

export const AOPopover = ({ cell, handleClick, onCommentChange, comment }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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

  return (
    <Box>
      <AOCommentBase
        cell={cell}
        open={open}
        handleClose={handleClose}
        comment={comment}
        onCommentChange={onCommentChange}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <AOPopoverRadio onChange={handleChange} radioValue={radioValue} />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </Box>
  );
};
