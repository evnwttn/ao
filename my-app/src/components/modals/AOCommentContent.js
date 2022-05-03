import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { palette, modalFontSx } from "../../assets/theme";

export const AOCommentContent = ({ cell }) => {
  return (
    <>
      <Box
        sx={{
          ...modalFontSx,
          display: "inline-flex",
          mb: 1,
        }}
      >
        <Box sx={{}}>{cell.track}</Box> | <Box sx={{}}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" style={{ color: palette.aoDivider }} />
      <Box sx={{ mt: 3 }}>Comments</Box>
    </>
  );
};
