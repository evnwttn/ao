import { Radio, Box } from "@mui/material";

export const AOPopoverRadio = ({ onChange, radioValue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Radio checked={radioValue === "1"} onChange={onChange} value="1" />
      <Radio checked={radioValue === "2"} onChange={onChange} value="2" />
    </Box>
  );
};
