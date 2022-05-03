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
        <Box sx={{ pr: 1, fontWeight: "bold", color: palette.aoRed }}>
          {cell.track}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider }}
        />
        <Box sx={{ pl: 1 }}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <Box sx={{ mt: 3 }}>Comments</Box>
    </>
  );
};
