import { Box } from "@mui/material";
import { modalCenteredSx, palette } from "../../assets/theme";

export const AONavAboutContent = () => {
  return (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
    >
      YOU MAY CLICK ON A CELL TO BEGIN.
      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            b: {
              color: palette.aoRed,
            },
          }}
        >
          <b>Yeah</b> indicades ____
        </Box>
        <Box
          sx={{
            b: {
              color: palette.aoRed,
            },
          }}
        >
          <b>Yeah</b> indicades ____
        </Box>{" "}
        <Box
          sx={{
            b: {
              color: palette.aoRed,
            },
          }}
        >
          <b>Yeah</b> indicades ____
        </Box>{" "}
        <Box
          sx={{
            b: {
              color: palette.aoRed,
            },
          }}
        >
          <b>Yeah</b> indicades ____
        </Box>
      </Box>
    </Box>
  );
};
