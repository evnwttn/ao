import { useState } from "react";
import { Box } from "@mui/system";
// import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";

export const AOPopover = ({ handleClick }) => {
  // const [selectedValue, setSelectedValue] = useState("1");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <Box>
      {/* <AOPopoverRadio onChange={handleChange} selectedValue={selectedValue} /> */}
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </Box>
  );
};
