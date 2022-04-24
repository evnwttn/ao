import { Box } from "@mui/system";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

export const AOColourWheel = (cellColour) => {
  return (
    <>
      <Box>
        <AOSpoke id="yellow" color={palette.aoYellow} transform="rotate(270)" />
        <AOSpoke id="blue" color={palette.aoBlue} />
      </Box>
      <Box>
        <AOSpoke id="grey" color={palette.aoGrey} transform="rotate(180)" />
        <AOSpoke id="empty" color="transparent" transform="rotate(90)" />
      </Box>
    </>
  );
};
