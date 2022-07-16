import { Box, Button } from "@mui/material";

export const ParameterList = ({ addParameterList }) => {
  const parameters = [
    "Vocals",
    "Bass",
    "Rhythm Guitar",
    "Lead Guitar",
    "Drums",
    "Percussion",
    "Piano",
    "Synth",
    "Strings",
    "Sax",
    "FX",
    "Mix",
    "Master",
    "Artwork",
  ];

  return (
    <Box sx={{ mt: "1vw" }}>
      {parameters.map((parameter) => {
        return (
          <Button
            key={parameter}
            variant="outlined"
            onClick={() => addParameterList(parameter)}
            disableRipple
          >
            {parameter}
          </Button>
        );
      })}
    </Box>
  );
};
