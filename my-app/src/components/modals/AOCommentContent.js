import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { modalFontSx, logoSx, palette } from "../../assets/theme";

export const AOCommentContent = () => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        bgcolor: palette.aoGrey,
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "33%",
        boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
        p: "2.75vw",
      }}
    >
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
    </Box>
  );
};
