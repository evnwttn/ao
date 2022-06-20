import { Box } from "@mui/system";
import { AOSpoke } from "./AOSpoke";
import { palette } from "../assets/theme";

export const AOColorWheel = ({ handleClick, openComment }) => {
  return (
    <Box>
      <Box>
        <AOSpoke
          color={palette.aoYellow}
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
          handleClick={(color) => handleClick(color)}
          toolTip="Set Task"
          placement="left-end"
        />
        <AOSpoke
          color={palette.aoBlack}
          toolTip="Comments"
          placement="right-end"
          handleClick={openComment}
        />
      </Box>
    </Box>
  );
};
