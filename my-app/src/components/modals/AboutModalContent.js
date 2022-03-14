import Box from "@mui/material/Box";
import { palette } from "../../assets/theme";

export const AboutModalContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "1.66",
        fontFamily: "Noto Sans",
        letterSpacing: "0.03333em",
        color: palette.aoWhite,
      }}
    >
      A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED BY &amp; FOR MUSICIANS TO TRACK
      &amp; MONITOR PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF
      GOALS. TO BEGIN START A NEW PROJECT.
    </Box>
  );
};
