import { Box } from "@mui/material";
import "@fontsource/noto-serif";
import { palette, logoSx } from "../assets/theme";

export const MainLogo = () => {
  return (
    <>
      <Box
        sx={{ ...logoSx, color: palette.aoBlue, fontSize: "13vw", mt: "-5vh" }}
      >
        ꜵ
      </Box>
    </>
  );
};
