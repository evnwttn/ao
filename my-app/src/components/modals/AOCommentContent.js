import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export const AOCommentContent = ({ cell }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <TextField id={`${cell.track}.${cell.parameter}`} variant="filled" />
      </Box>
    </Box>
  );
};
