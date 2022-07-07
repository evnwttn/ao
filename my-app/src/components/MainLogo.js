import { Box } from "@mui/material";
import { palette, logoSx } from "../assets/theme";

export const MainLogo = () => {
  return (
    <Box
      sx={{
        ...logoSx,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        color: palette.aoBlue,
        fontSize: "13vw",
        mt: "-5vh",
      }}
    >
      ꜵ
    </Box>
  );
};
