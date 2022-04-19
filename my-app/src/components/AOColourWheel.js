import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { palette } from "../assets/theme";

export const AOColourWheel = () => {
  return (
    <Box>
      <Fab color={palette.aoBlue} aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};
