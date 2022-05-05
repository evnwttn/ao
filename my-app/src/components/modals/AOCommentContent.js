import { Box } from "@mui/system";
import { palette } from "../../assets/theme";
import { TextField } from "@mui/material";

const inputProps = {
  sx: {
    backgroundColor: palette.aoWhite,
    color: palette.aoBlack,
    fontFamily: "Noto-Serif",
    letterSpacing: "0.05vw",
    lineHeight: "1.75vw",
    fontSize: "1.05vw",
    paddingTop: "1vw",
    paddingLeft: "1.5vw",
    paddingRight: "1.5vw",
    paddingBottom: "1vw",
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
          rows={6}
        />
      </Box>
    </Box>
  );
};
