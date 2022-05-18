import { Box } from "@mui/system";
import { AOSpoke } from "./AOSpoke";
import { palette } from "../assets/theme";

export const AOColorWheel = ({ handleClick, openComment }) => {
  return (
    <Box>
      <Box>
        <AOSpoke
          color={palette.aoYellow}
          transform="rotate(270)"
          handleClick={(color) => handleClick(color)}
          toolTip="In Progress"
          placement="left-start"
        />
        <AOSpoke
          color={palette.aoBlue}
          handleClick={(color) => handleClick(color)}
          toolTip="Completed"
          placement="right-start"
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoGrey}
          transform="rotate(180)"
          handleClick={(color) => handleClick(color)}
          toolTip="Set Task"
          placement="left-end"
        />
        <AOSpoke
          color={palette.aoBlack}
          transform="rotate(90)"
          toolTip="Comments"
          placement="right-end"
          handleClick={openComment}
        />
      </Box>
    </Box>
  );
};
