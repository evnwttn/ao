import { useState } from "react";
import { Box } from "@mui/system";
import { Radio } from "@mui/material";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

export const AOColourWheel = ({ handleClick }) => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          pointerEvents: "auto",
          "&:hover": { opacity: "0.6", cursor: "pointer" },
        }}
      >
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoYellow}
          transform="rotate(270)"
          handleClick={(color) => handleClick(color)}
        />
        <AOSpoke
          color={palette.aoBlue}
          handleClick={(color) => handleClick(color)}
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoGrey}
          transform="rotate(180)"
          handleClick={(color) => handleClick(color)}
        />
        <AOSpoke
          color={palette.aoBlack}
          transform="rotate(90)"
          handleClick={(color) => handleClick(color)}
        />
      </Box>
    </>
  );
};
