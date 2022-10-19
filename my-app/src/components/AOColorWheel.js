import { Box } from "@mui/system";
import { AOSpoke } from "./index";
import { palette, svgShapes } from "../assets/theme";

export const AOColorWheel = ({ handleClick, openComment }) => {
  return (
    <Box>
      <Box>
        <AOSpoke
          color={palette.aoYellow}
          shape={svgShapes.topLeft}
          handleClick={(color) => handleClick(color)}
          toolTip="In Progress"
          placement="left-start"
        />
        <AOSpoke
          color={palette.aoBlue}
          shape={svgShapes.topRight}
          handleClick={(color) => handleClick(color)}
          toolTip="Completed"
          placement="right-start"
        />
      </Box>
      <Box>
        <AOSpoke
          color={palette.aoGrey}
          shape={svgShapes.bottomLeft}
          handleClick={(color) => handleClick(color)}
          toolTip="Set Task"
          placement="left-end"
        />
        <AOSpoke
          color={palette.aoBlack}
          shape={svgShapes.bottomRight}
          toolTip="Comments"
          placement="right-end"
          handleClick={openComment}
        />
      </Box>
    </Box>
  );
};
