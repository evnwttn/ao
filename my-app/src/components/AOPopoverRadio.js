import { Radio, Box } from "@mui/material";
import { useState } from "react";

export const AOPopoverRadio = () => {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  return (
    <Box
      sx={{
        pointerEvents: "auto",
        "&:hover": { opacity: "0.6", cursor: "pointer" },
      }}
    >
      <Radio
        checked={selectedValue === "1"}
        onChange={handleChange}
        value="1"
      />
      <Radio
        checked={selectedValue === "2"}
        onChange={handleChange}
        value="2"
      />
    </Box>
  );
};
