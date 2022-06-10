import { Box, TextField, IconButton, Divider } from "@mui/material";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";
import { NewModalContentList } from "./NewModalContentList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const NewModalContentListForm = ({
  handleSubmit,
  onSubmitTrackOrParameter,
  onRemoveTrackOrParameter,
  onSubmitList,
  formPrompt,
  sessionData,
  textInput,
  inputArray,
  setValue,
}) => {
  const handleKeyPress = (e) => {
    console.log(e);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          ...modalCenteredSx,
        }}
        onSubmit={handleSubmit(onSubmitList)}
      >
        <Box
          sx={{
            ...newSessionModal.text,
          }}
        >
          Enter the {""}
          {formPrompt === 2 ? <b>track titles</b> : <b>session parameters</b>}
          {""} you wish to include in the
          {""} {sessionData.id} session. You can always add more later.
        </Box>
        <Box
          onKeyPress={handleKeyPress}
          sx={{
            ...newSessionModal.field,
          }}
        >
          <TextField
            sx={{ ml: 13 }}
            variant="standard"
            margin="normal"
            inputRef={textInput}
            autoComplete="off"
          />
          <IconButton
            onClick={handleSubmit(onSubmitTrackOrParameter)}
            disableRipple
          >
            <AddCircleIcon sx={{ mr: 1 }} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            onClick={() => {
              inputArray.forEach((title, index) => {
                formPrompt === 2
                  ? setValue(`tracks.${index}.title`, title)
                  : setValue(`parameters.${index + 1}`, title);
              });
            }}
            type="submit"
            disableRipple
            sx={{ p: "10px", ml: 1 }}
          >
            <CheckCircleIcon />
          </IconButton>
        </Box>
      </Box>
      <Box component="form">
        <NewModalContentList
          data={inputArray}
          onSubmit={(title) => onRemoveTrackOrParameter(`${title}`)}
        />
      </Box>
    </>
  );
};
