import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

export const NewModal = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <AddCircleOutline sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="With sx" variant="standard" />
    </Box>
  );
};
