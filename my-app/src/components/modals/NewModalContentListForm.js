import { Box, Button, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";

export const NewModalContentListForm = ({
  handleSubmit,
  addTrackOrParameter,
  onSubmitTrackOrParameter,
  onRemoveTrackOrParameter,
  onSubmitForm,
  formPrompt,
  sessionData,
  textInput,
  inputArray,
}) => {
  return (
    <>
      <Box
        sx={modalCenteredSx}
        component="form"
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
      >
        <Box sx={newSessionModal.text}>
          Enter the&nbsp;
          {formPrompt === 2 ? <b>track titles</b> : <b>session elements</b>}
          &nbsp;you wish to include in the {sessionData.id} session.
          {formPrompt === 3 && (
            <Box>
              <Button variant="outlined">Vocals</Button>
              <Button variant="outlined">Bass</Button>
              <Button variant="outlined">Rhythm Guitar</Button>
              <Button variant="outlined">Lead Guitar</Button>
              <Button variant="outlined">Drums</Button>
              <Button variant="outlined">Piano</Button>
              <Button variant="outlined">Synth</Button>
              <Button variant="outlined">Strings</Button>
              <Button variant="outlined">FX</Button>
              <Button variant="outlined">Mix</Button>
              <Button variant="outlined">Master</Button>
            </Box>
          )}
        </Box>
        <Box sx={newSessionModal.field}>
          <TextField
            sx={{ ml: "8.25vw", width: "19.5vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputRef={textInput}
          />
          <IconButton type="submit" onClick={addTrackOrParameter} disableRipple>
            <AddCircleIcon sx={{ mr: "0.75vw" }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <NewModalContentList
          data={inputArray}
          onClick={(title) => onRemoveTrackOrParameter(title)}
        />
        {inputArray.length > 0 && (
          <IconButton
            onClick={handleSubmit(onSubmitForm)}
            disableRipple
            sx={{ ml: "0.75vw" }}
          >
            <CheckCircleIcon />
          </IconButton>
        )}
      </Box>
    </>
  );
};
