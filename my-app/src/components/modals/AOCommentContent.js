import { Box } from "@mui/system";
import { palette } from "../../assets/theme";
import { TextField } from "@mui/material";

const inputProps = {
  sx: {
    padding: "1vw",
    color: palette.aoBlack,
    fontSize: "1vw",
    fontWeight: "400",
    backgroundColor: palette.aoWhite,
    height: "10vw",
  },
};

export const AOCommentContent = ({ cell }) => {
  return (
    <Box>
      <Box>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={inputProps}
          sx={{ paddingTop: "0.5vw", width: "87%" }}
          margin="normal"
          variant="filled"
        />
      </Box>
    </Box>
  );
};
