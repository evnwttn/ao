import { Box } from "@mui/system";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

export const AOColourWheel = ({ handleClick }) => {
  return (
    <>
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
          color="transparent"
          transform="rotate(90)"
          handleClick={(color) => handleClick(color)}
        />
      </Box>
    </>
  );
};
