import Box from "@mui/material/Box";
import { modalCenteredSx } from "../../assets/theme";

export const AboutModalContent = () => {
  return (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
    >
      A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED BY &amp; FOR MUSICIANS TO TRACK
      &amp; MONITOR PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF
      GOALS.
      <Box sx={{ mt: "2rem" }}>
        TO BEGIN START A <b>NEW</b> PROJECT.
      </Box>
    </Box>
  );
};
