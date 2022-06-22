import { Box, TextField, IconButton, Divider } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx, newSessionModal } from "../../assets/theme";

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
  return (
    <>
      <Box
        component="form"
        sx={modalCenteredSx}
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
      >
        <Box sx={newSessionModal.text}>
          Enter the
          {formPrompt === 2 ? <b>track titles</b> : <b>session parameters</b>}
          you wish to include in the {sessionData.id} session. You can always
          add more later.
        </Box>
        <Box sx={newSessionModal.field}>
          <TextField
            sx={{ ml: "7vw", width: "17vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputRef={textInput}
          />
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
          >
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
          onSubmit={(title) => onRemoveTrackOrParameter(`${title}`)}
        />
      </Box>
    </>
  );
};
