import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { palette, modalFontSx } from "../../assets/theme";

export const AOCommentContent = () => {
  return (
    <>
      <Box
        sx={{
          ...modalFontSx,
          mb: 1,
        }}
      >
        track title | parameter
      </Box>
      <Divider variant="middle" style={{ color: palette.aoDivider }} />
      <Box sx={{ mt: 3 }}>Comments</Box>
    </>
  );
};
