import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { palette } from "../../assets/theme";

// ask dylan -
// is it possible to nest forms? google indicates no

// to do
// consolidate submits
// eliminate next button also submitting track/parameter
// might be able to consolidate track & parameter and interchange prompt !!

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
  const onSubmitTrack = (data) => {
    setFormNumber(formNumber + 1);
    console.log(data);
  };
  const onSubmitParameter = (data) => {
    setFormNumber(formNumber + 1);
    console.log(data);
  };
  const onCompleteTrackForm = (data) => {
    setTrackFormCompleted(true);
    setFormNumber(0);
    setFormTarget("parameter");
    console.log(data);
  };
  const onCompleteParameterForm = (data) => {
    setParameterFormCompleted(true);
    console.log(data);
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
            onSubmit={
              trackFormCompleted
                ? handleSubmit(onSubmitParameter)
                : handleSubmit(onSubmitTrack)
            }
          >
            Enter the titles of {formTarget}s you wish to include in the{" "}
            {aoSessionTitle} session. You can always add more later.
            <Box>
              <TextField
                variant="standard"
                margin="normal"
                autoComplete="off"
                helperText={`Add ${formTarget}s`}
                {...register(`${formTarget}${formNumber}`)}
              />
            </Box>
            <Box>
              <IconButton
                disableRipple
                sx={{ cursor: "pointer" }}
                type="submit"
              >
                <AddIcon
                  sx={{
                    my: 0.5,
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={
              trackFormCompleted
                ? handleSubmit(onCompleteParameterForm)
                : handleSubmit(onCompleteTrackForm)
            }
          >
            <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
              <SendIcon
                sx={{
                  my: 0.5,
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </Box>
        </>
      ) : (
        // SESSION TITLE FORM
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
              <IconButton
                disableRipple
                sx={{ cursor: "pointer" }}
                type="submit"
              >
                <SendIcon
                  sx={{
                    cursor: "pointer",
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
