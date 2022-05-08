import { Box } from "@mui/system";
import { commentSx } from "../../assets/theme";
import { TextField } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

export const AOCommentContent = ({ onChange, comment, cell }) => {
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
          onChange={onChange}
        />
      </Box>
      <SaveRoundedIcon
        sx={{
          ml: "25vw",
          mt: "1vh",
        }}
        onClick={() => console.log(comment)}
      />
    </Box>
  );
};
