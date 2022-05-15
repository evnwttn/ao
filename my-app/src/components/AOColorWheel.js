import { Box } from "@mui/system";
import { AOSpoke } from "./AOSpoke";
import { palette } from "../assets/theme";

export const AOColorWheel = ({ handleClick }) => {
  return (
    <Box>
      <Box>
        <AOSpoke
          color={palette.aoYellow}
          transform="rotate(270)"
          handleClick={(color) => handleClick(color)}
          toolTip="In Progress"
        />
        <AOSpoke
          color={palette.aoBlue}
          handleClick={(color) => handleClick(color)}
          toolTip="Completed"
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoGrey}
          transform="rotate(180)"
          handleClick={(color) => handleClick(color)}
          toolTip="Task"
        />
        <AOSpoke
          color="transparent"
          transform="rotate(90)"
          handleClick={(color) => handleClick(color)}
          toolTip="Remove"
        />
      </Box>
    </Box>
  );
};
