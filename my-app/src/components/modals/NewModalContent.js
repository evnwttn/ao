import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { palette } from "../../assets/theme";
import { NewModalContentList } from "./NewModalContentList";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const fontStyle = {
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "1.66",
  fontFamily: "Noto Sans",
  letterSpacing: "0.03333em",
  color: palette.aoWhite,
};

export const NewModalContent = () => {
  const [aoSessionTitle, setAoSessionTitle] = useState("");
  const [titleFormCompleted, setTitleFormCompleted] = useState(false);
  const [trackFormCompleted, setTrackFormCompleted] = useState(false);
  const [parameterFormCompleted, setParameterFormCompleted] = useState(false);
  const [aoOutput, setAoOutput] = useState([]);
  const [formTarget, setFormTarget] = useState(`track`);
  const [formNumber, setFormNumber] = useState(0);

  const textInput = React.useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { sessionTitle: "New Session" } });

  const onSubmitTitle = (data) => {
    data.sessionTitle !== ""
      ? setTitleFormCompleted(true) || setAoSessionTitle(watch("sessionTitle"))
      : console.log(errors);
  };

  const onSubmit = (data) => {
    setFormNumber(formNumber + 1);
    textInput.current.value = "";
    setAoOutput({ ...data });
  };

  const onCompleteTrackForm = () => {
    setTrackFormCompleted(true);
    setFormNumber(0);
    setFormTarget(`parameter`);
  };

  const onCompleteParameterForm = () => {
    setParameterFormCompleted(true);
  };

  const listOnClick = (title) => {
    switch (formTarget) {
      case `track`:
        for (let i = 0; i < aoOutput.track.length; i++) {
          if (aoOutput.track[i] === title) {
            console.log(aoOutput.track[i]);
          }
        }
        break;
      case `parameter`:
        for (let i = 0; i < aoOutput.parameter.length; i++) {
          if (aoOutput.parameter[i] === title) {
            console.log(aoOutput.parameter[i]);
          }
        }
        break;
      default:
        console.log(null);
    }
  };

  return (
    <>
      {parameterFormCompleted ? (
        <Box>Completed {console.log(aoOutput)};</Box>
      ) : titleFormCompleted ? (
        <>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={handleSubmit(onSubmit)}
          >
            Enter the names of {formTarget}s you wish to include in the{" "}
            {aoSessionTitle} session. You can always add more later.
            <Box>
              <TextField
                variant="standard"
                margin="normal"
                inputRef={textInput}
                autoComplete="off"
                {...register(`${formTarget}.${formNumber}`)}
              />
            </Box>
            <Box>
              <IconButton disableRipple type="submit">
                <AddIcon sx={{ my: 0.5 }} />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <IconButton
              disableRipple
              onClick={() => {
                trackFormCompleted
                  ? onCompleteParameterForm()
                  : onCompleteTrackForm();
              }}
            >
              <SendIcon sx={{ my: 0.5 }} />
            </IconButton>
          </Box>
          <NewModalContentList
            input={aoOutput}
            target={formTarget}
            onClick={listOnClick}
          />
        </>
      ) : (
        <>
          <Box
            sx={{ boxStyle, fontStyle }}
            component="form"
            onSubmit={handleSubmit(onSubmitTitle)}
          >
            <TextField
              variant="standard"
              helperText="enter a session title to continue"
              margin="normal"
              autoComplete="off"
              {...register("sessionTitle", { required: true })}
            />

            <Box>
              <IconButton disableRipple type="submit">
                <SendIcon
                  sx={{
                    my: 0.5,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
