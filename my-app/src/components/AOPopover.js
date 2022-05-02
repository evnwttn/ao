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
      {radioValue === "1" ? (
        <AOColorWheel handleClick={(color) => handleClick(color)} />
      ) : (
        // COMMENTS COMPONENT WILL RENDER HERE
        <AOColorWheel handleClick={(color) => handleClick(color)} />
      )}
    </Box>
  );
};
