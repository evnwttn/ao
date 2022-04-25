import { Box } from "@mui/system";
import { palette } from "../assets/theme";
import { AOSpoke } from "./AOSpoke";

const handleClick = (spoke) => {
  console.log(spoke);
};

export const AOColourWheel = () => {
  return (
    <>
      <Box>
        <AOSpoke
          spoke={"yellow"}
          color={palette.aoYellow}
          transform="rotate(270)"
          handleClick={(spoke) => handleClick(spoke)}
        />
        <AOSpoke
          spoke={"blue"}
          color={palette.aoBlue}
          handleClick={(spoke) => handleClick(spoke)}
        />
      </Box>
      <Box>
        <AOSpoke
          spoke={"grey"}
          color={palette.aoGrey}
          transform="rotate(180)"
          handleClick={(spoke) => handleClick(spoke)}
        />
        <AOSpoke
          spoke={"empty"}
          color="transparent"
          transform="rotate(90)"
          handleClick={(spoke) => handleClick(spoke)}
        />
      </Box>
    </>
  );
};
