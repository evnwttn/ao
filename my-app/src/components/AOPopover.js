import { useState } from "react";
import { Box } from "@mui/system";
import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";

export const AOPopover = ({ handleClick }) => {
  const [radioValue, setRadioValue] = useState("1");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
    radioValue === "1" ? console.log("comments") : console.log("colourwheel");
  };

  return (
    <Box>
      <AOPopoverRadio onChange={handleChange} radioValue={radioValue} />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </Box>
  );
};
