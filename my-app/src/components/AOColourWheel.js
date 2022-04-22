import { Box } from "@mui/system";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

export const AOColourWheel = (cellColour) => {
  return (
    <>
      <Box>
        <AOSpoke
          id="yellow"
          color={palette.aoYellow}
          transform="rotate(270deg)"
        />
        <AOSpoke id="blue" color={palette.aoBlue} transform="none" />
      </Box>
      <Box>
        <AOSpoke id="grey" color={palette.aoGrey} transform="rotate(180deg)" />
        <AOSpoke id="empty" color="transparent" transform="rotate(90deg)" />
      </Box>
    </>
  );
};
