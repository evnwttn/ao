import { Box } from "@mui/system";

export const AOColourWheel = (cellColour) => {
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        backgroundColor: cellColour.cellColour,
      }}
    ></Box>
  );
};
