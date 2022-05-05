import { Box } from "@mui/system";
import { palette } from "../../assets/theme";
import { TextField } from "@mui/material";

const inputProps = {
  sx: {
    color: palette.aoBlack,
    fontSize: "1vw",
    backgroundColor: palette.aoWhite,
  },
};

export const AOCommentContent = ({ cell }) => {
  return (
    <Box>
      <Box>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={inputProps}
          sx={{
            paddingTop: "0.75vw",
            width: "87%",
          }}
          margin="normal"
          variant="filled"
          multiline
          rows={4}
        />
      </Box>
    </Box>
  );
};
