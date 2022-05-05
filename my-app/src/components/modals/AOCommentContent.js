import { Box } from "@mui/system";
import { palette } from "../../assets/theme";
import { TextField } from "@mui/material";

const inputProps = {
  sx: {
    padding: "1vw",
    color: palette.aoBlack,
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
          sx={{ paddingTop: "0.5vw", width: "85%" }}
          margin="normal"
          variant="filled"
        />
      </Box>
    </Box>
  );
};
