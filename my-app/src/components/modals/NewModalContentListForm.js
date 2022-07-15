import { Box, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";

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
      <Box sx={modalCenteredSx}>
        <Box sx={newSessionModal.text}>
          Enter the&nbsp;
          {formPrompt === 2 ? <b>track titles</b> : <b>session parameters</b>}
          &nbsp;you wish to include in the {sessionData.id} session.
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(addTrackOrParameter)}
          sx={newSessionModal.field}
        >
          <TextField
            sx={{ ml: "7vw", width: "17vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputRef={textInput}
          />
          <IconButton type="submit" disableRipple>
            <AddCircleIcon sx={{ mr: "0.75vw" }} />
          </IconButton>
        </Box>
        <Box>
          <NewModalContentList
            data={inputArray}
            onClick={(title) => onRemoveTrackOrParameter(title)}
          />
          <IconButton
            onClick={console.log(inputArray)}
            disableRipple
            sx={{ ml: "0.75vw" }}
          >
            <CheckCircleIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
