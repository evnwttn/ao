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
  thang,
}) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          ...modalCenteredSx,
        }}
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
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
          <IconButton disableRipple type="submit">
            <AddCircleIcon sx={{ mr: 1 }} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Box>
      </Box>
      <Box
        component="form"
        sx={{ width: 0 }}
        onClick={() => {
          inputArray.forEach((title, index) => {
            formPrompt === 2
              ? setValue(`tracks.${index}.title`, title)
              : setValue(`parameters.${index + 1}`, title);
          });
        }}
        onSubmit={handleSubmit(onSubmitList)}
      >
        <IconButton type="submit" disableRipple sx={{ p: "10px", ml: 1 }}>
          <CheckCircleIcon />
        </IconButton>
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
