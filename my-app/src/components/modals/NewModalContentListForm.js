import { Box, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { ParameterList } from "./ParameterList";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";

export const NewModalContentListForm = ({
  handleSubmit,
  addTrackOrParameter,
  addParameterList,
  onSubmitSessionData,
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
        // component="form"
        // onSubmit={handleSubmit(onSubmitTrackOrParameter)}
      >
        <Box sx={newSessionModal.text}>
          {formPrompt === 2 ? (
            <>
              Enter the <b>track titles</b> you wish to include in the&nbsp;
              {sessionData.id} session.
            </>
          ) : (
            <>
              Enter or select the <b>session elements</b> you wish to include in
              the {sessionData.id} session.
              <ParameterList addParameterList={addParameterList} />
            </>
          )}
        </Box>
        <Box sx={newSessionModal.field}>
          <TextField
            sx={{ ml: "8vw", width: "19.5vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputRef={textInput}
          />
          <IconButton
            // type="submit"
            onClick={addTrackOrParameter}
            disableRipple
          >
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
            // onClick={handleSubmit(onSubmitSessionData)}
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
