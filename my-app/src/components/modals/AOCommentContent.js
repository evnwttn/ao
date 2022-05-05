import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export const AOCommentContent = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Box>
    </Box>
  );
};
