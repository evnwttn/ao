import { Radio, Box } from "@mui/material";

export const AOPopoverRadio = ({ onChange, selectedValue }) => {
  console.log(selectedValue);
  return (
    <Box
      sx={{
        pointerEvents: "auto",
        "&:hover": { opacity: "0.8", cursor: "pointer" },
      }}
    >
      <Radio checked={selectedValue === "1"} onChange={onChange} value="1" />
      <Radio checked={selectedValue === "2"} onChange={onChange} value="2" />
    </Box>
  );
};
