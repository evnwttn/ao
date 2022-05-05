import { Box } from "@mui/system";
import { commentSx } from "../../assets/theme";
import { TextField } from "@mui/material";

export const AOCommentContent = ({ cell }) => {
  return (
    <Box>
      <Box>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={{ ...commentSx.inputProps }}
          sx={{
            ...commentSx.textField,
          }}
          margin="normal"
          variant="filled"
          multiline
          rows={6}
        />
      </Box>
    </Box>
  );
};
