import Box from "@mui/material/Box";

export const AboutModalContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "0.75rem",
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
