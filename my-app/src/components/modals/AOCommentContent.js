import { Box, TextField, IconButton } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { commentSx } from "../../assets/theme";

export const AOCommentContent = ({
  cell,
  cellComment,
  handleSubmit,
  onSubmit,
  register,
}) => {
  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={commentSx.inputProps}
          sx={commentSx.textField}
          margin="normal"
          variant="filled"
          multiline
          rows={6}
          defaultValue={cellComment}
          {...register("comment", {})}
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
    </>
  );
};
