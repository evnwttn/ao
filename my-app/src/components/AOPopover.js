import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";
import { AOCommentBase } from "./AOCommentBase";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const AOPopover = ({
  cell,
  handleClick,
  register,
  handleSubmit,
  onSubmit,
}) => {
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
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
      <HighlightOffIcon
        sx={{ pointerEvents: "auto" }}
        onClick={() => handleClick("transparent")}
      />
    </Box>
  );
};
