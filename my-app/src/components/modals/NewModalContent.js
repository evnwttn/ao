import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { palette } from "../../assets/theme";

// TO FINISH BEFORE BUILDING OUT CHART COMPONENT
// INSTRUCTIONS AT BEGINNING OF NEW TO EXPLAIN TRACKS/PARAMTERS
// ENSURE WHEN SUBMITTING (ARROW) IT DOES NOT ADD TO OBJECT ARRAY, ONLY ON ADD (PLUS)

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
  const [formTarget, setFormTarget] = useState("track");
  const [formNumber, setFormNumber] = useState(0);

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

  const textInput = React.useRef(null);

  const onSubmit = (data) => {
    setFormNumber(formNumber + 1);
    textInput.current.value = "";
    const output = {
      ...data,
    };
    console.log(output);
  };

  const onCompleteTrackForm = () => {
    setTrackFormCompleted(true);
    setFormNumber(0);
    setFormTarget("parameter");
  };

  const onCompleteParameterForm = () => {
    setParameterFormCompleted(true);
  };

  return (
    <>
      {parameterFormCompleted ? (
        <Box>Completed</Box>
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
                helperText={`Add ${formTarget}s`}
                {...register(`${formTarget}.${formNumber}`)}
              />
            </Box>
            <Box>
              <IconButton disableRipple type="submit">
                <AddIcon sx={{ my: 0.5 }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={
              trackFormCompleted
                ? handleSubmit(onCompleteParameterForm)
                : handleSubmit(onCompleteTrackForm)
            }
          >
            <IconButton disableRipple type="submit">
              <SendIcon sx={{ my: 0.5 }} />
            </IconButton>
          </Box>
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
