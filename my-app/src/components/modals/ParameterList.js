import { Box, Button } from "@mui/material";

export const ParameterList = () => {
  const parameters = [
    "Vocals",
    "Bass",
    "Rhythm Guitar",
    "Lead Guitar",
    "Drums",
    "Piano",
    "Synth",
    "Strings",
    "FX",
    "Mix",
    "Master",
  ];

  return (
    <Box sx={{ mt: "1vw" }}>
      {parameters.map((parameter) => {
        return (
          <Button variant="outlined" disableRipple>
            {parameter}
          </Button>
        );
      })}
    </Box>
  );
};
