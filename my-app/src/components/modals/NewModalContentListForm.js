import { Box, TextField, IconButton, Divider } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";

// separate track / parameter forms
// add in buttons for default options in parameter
// rework the wording here
// move submit to below list

export const NewModalContentListForm = ({
  handleSubmit,
  addTrackOrParameter,
  onSubmitTrackOrParameter,
  onRemoveTrackOrParameter,
  onSubmitList,
  formPrompt,
  sessionData,
  textInput,
  inputArray,
}) => {
  return (
    <>
      <Box
        component="form"
        sx={modalCenteredSx}
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
      >
        <Box sx={newSessionModal.text}>
          Enter the&nbsp;
          {formPrompt === 2 ? <b>track titles</b> : <b>session parameters</b>}
          &nbsp;you wish to include in the {sessionData.id} session.
          {formPrompt === 3 && "Buttons be going here"}
        </Box>
        <Box sx={newSessionModal.field}>
          <TextField
            sx={{ ml: "7vw", width: "17vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputRef={textInput}
          />
          <IconButton onClick={addTrackOrParameter} type="submit" disableRipple>
            <AddCircleIcon sx={{ mr: "0.75vw" }} />
          </IconButton>
          <Divider
            sx={{ height: "2.5vw", m: "0.25vw" }}
            orientation="vertical"
          />
          <IconButton
            onClick={handleSubmit(onSubmitList)}
            disableRipple
            sx={{ ml: "0.75vw" }}
          >
            <CheckCircleIcon />
          </IconButton>
        </Box>
      </Box>
      <Box component="form">
        <NewModalContentList
          data={inputArray}
          onSubmit={(title) => onRemoveTrackOrParameter(title)}
        />
      </Box>
    </>
  );
};
