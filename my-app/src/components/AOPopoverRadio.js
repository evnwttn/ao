import { Radio, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const AOPopoverRadio = ({ onChange, radioValue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HighlightOffIcon />
    </Box>
  );
};
