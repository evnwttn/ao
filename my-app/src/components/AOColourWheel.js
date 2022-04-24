import { Box } from "@mui/system";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

const handleClick = () => {
  console.log("hello wr0ld");
};

export const AOColourWheel = (cellColour) => {
  return (
    <>
      <Box>
        <AOSpoke
          spoke={"yellow"}
          color={palette.aoYellow}
          transform="rotate(270)"
          handleClick={(spoke) => handleClick(spoke)}
        />
        <AOSpoke id="blue" color={palette.aoBlue} />
      </Box>
      <Box>
        <AOSpoke id="grey" color={palette.aoGrey} transform="rotate(180)" />
        <AOSpoke id="empty" color="transparent" transform="rotate(90)" />
      </Box>
    </>
  );
};
