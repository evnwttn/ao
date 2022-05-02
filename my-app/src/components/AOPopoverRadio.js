import { Radio, Box } from "@mui/material";

export const AOPopoverRadio = ({ onChange, selectedValue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Radio checked={selectedValue === "1"} onChange={onChange} value="1" />
      <Radio checked={selectedValue === "2"} onChange={onChange} value="2" />
    </Box>
  );
};
