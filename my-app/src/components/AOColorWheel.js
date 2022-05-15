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
          placement="top-start"
        />
        <AOSpoke
          color={palette.aoBlue}
          handleClick={(color) => handleClick(color)}
          toolTip="Completed"
          placement="top-end"
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoGrey}
          transform="rotate(180)"
          handleClick={(color) => handleClick(color)}
          toolTip="Set Task"
          placement="bottom-start"
        />
        <AOSpoke
          color="transparent"
          transform="rotate(90)"
          handleClick={(color) => handleClick(color)}
          toolTip="Remove Task"
          placement="bottom-end"
        />
      </Box>
    </Box>
  );
};
