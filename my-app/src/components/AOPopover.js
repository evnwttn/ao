import { useState } from "react";
import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";

export const AOPopover = ({ handleClick }) => {
  const [radioValue, setRadioValue] = useState("1");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <Box>
      <AOPopoverRadio onChange={handleChange} radioValue={radioValue} />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
      {radioValue === "1"
        ? console.log("do not show comments")
        : console.log("show comments")}
    </Box>
  );
};
