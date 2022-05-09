import { Box } from "@mui/system";
import { commentSx } from "../../assets/theme";
import { TextField, IconButton } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

export const AOCommentContent = ({
  onCommentChange,
  cell,
  handleSubmit,
  onSubmit,
  register,
}) => {
  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("comment", {})}
          onChange={onCommentChange}
        />
        <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
          <SaveRoundedIcon
            sx={{
              ml: "25vw",
              mt: "1vh",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
