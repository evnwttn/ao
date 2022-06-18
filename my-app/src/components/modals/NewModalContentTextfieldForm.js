import { Box, TextField, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContentTextfieldForm = ({
  handleSubmit,
  onSubmitForm,
  textInput,
  register,
  formPrompt,
}) => {
  return (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <TextField
        variant="standard"
        inputRef={textInput}
        helperText={
          formPrompt === 0
            ? "enter artist name to continue"
            : "enter a session title to continue"
        }
        margin="normal"
        autoComplete="off"
        {...(formPrompt === 0 ? register("author") : register("id"))}
      />
      <Box>
        <IconButton disableRipple type="submit">
          <CheckCircleIcon
            sx={{
              my: "0.25vw",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
