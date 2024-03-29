import { Box, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";
import { ParameterList, NewModalContentList } from "./index";

export const NewModalContentListForm = ({
  addInputArray,
  removeInputArray,
  addParameterList,
  submitInputArray,
  formPrompt,
  sessionData,
  textInput,
  inputArray,
}) => {
  return (
    <>
      <Box sx={modalCenteredSx}>
        <Box sx={newSessionModal.text}>
          {formPrompt === 2 ? (
            <>
              Enter the <b>track titles</b> you wish to include in the&nbsp;
              {sessionData.sessionTitle} session.
            </>
          ) : (
            <>
              Enter or select the <b>session elements</b> you wish to include in
              the {sessionData.sessionTitle} session.
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
            inputProps={{ maxLength: 14 }}
            inputRef={textInput}
          />
          <IconButton onClick={addInputArray} disableRipple>
            <AddCircleIcon sx={{ mr: "0.75vw" }} />
          </IconButton>
        </Box>
        <Box>
          <NewModalContentList
            data={inputArray}
            onClick={(title) => removeInputArray(title)}
          />
          {inputArray.length > 0 && (
            <IconButton
              onClick={submitInputArray}
              disableRipple
              sx={{ ml: "0.75vw" }}
            >
              <CheckCircleIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
};
