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
    <Box>
      {parameters.map((parameter) => {
        return <Button variant="outlined">{parameter}</Button>;
      })}
    </Box>
  );
};
