import { Box } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";

const Wheel = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export const AOColourWheel = (cellColour) => {
  return (
    <Box>
      <Wheel sx={{ color: cellColour.cellColour }} />
    </Box>
  );
};
