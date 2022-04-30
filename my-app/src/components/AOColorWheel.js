import { Box } from "@mui/system";
import { AOSpoke } from "./AOSpoke";
import { palette } from "../assets/theme";

export const AOColorWheel = ({ handleClick }) => {
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
          color={palette.aoBlack}
          transform="rotate(90)"
          handleClick={(color) => handleClick(color)}
        />
      </Box>
    </>
  );
};
