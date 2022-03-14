import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { palette } from "../../assets/theme";

// ask dylan -
// is it possible to nest forms? google indicates no

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
  const [titleFormCompleted, setTitleFormCompleted] = useState(false);
  const [trackFormCompleted, setTrackFormCompleted] = useState(false);
  const [parameterFormCompleted, setParameterFormCompleted] = useState(false);
  const [aoSessionTitle, setAoSessionTitle] = useState("");
  const [trackNumber, setNextTrackNumber] = useState(0);
  const [parameterNumber, setNextParameter] = useState(0);

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
    setNextTrackNumber(trackNumber + 1);
    console.log(data);
  };
  const onCompleteTrackForm = (data) => {
    setTrackFormCompleted(true);
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
      ) : trackFormCompleted ? (
        // PARAMETERS FORM
        <>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={handleSubmit(onSubmitTrack)}
          >
            Enter the titles of tracks you wish to include in the{" "}
            {aoSessionTitle} session. You can always add more later.
            <TextField
              variant="standard"
              margin="normal"
              autoComplete="off"
              helperText="Add Track"
              {...register(`track${trackNumber}`)}
            />
            <Box>
              <IconButton
                disableRipple
                sx={{ cursor: "pointer" }}
                type="submit"
              >
                <AddIcon
                  sx={{
                    color: palette.aoWhite,
                    my: 0.5,
                    cursor: "default",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={handleSubmit(onCompleteTrackForm)}
          >
            <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
              <SendIcon
                sx={{
                  color: palette.aoWhite,
                  my: 0.5,
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </Box>
        </>
      ) : titleFormCompleted ? (
        // TRACK TITLES FORM
        <>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={handleSubmit(onSubmitTrack)}
          >
            Enter the titles of tracks you wish to include in the{" "}
            {aoSessionTitle} session. You can always add more later.
            <TextField
              variant="standard"
              margin="normal"
              autoComplete="off"
              helperText="Add Track"
              {...register(`track${trackNumber}`)}
            />
            <Box>
              <IconButton
                disableRipple
                sx={{ cursor: "pointer" }}
                type="submit"
              >
                <AddIcon
                  sx={{
                    color: palette.aoWhite,
                    my: 0.5,
                    cursor: "default",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="form"
            sx={{ boxStyle, fontStyle }}
            onSubmit={handleSubmit(onCompleteTrackForm)}
          >
            <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
              <SendIcon
                sx={{
                  color: palette.aoWhite,
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
                sx={{ cursor: "default" }}
                type="submit"
              >
                <SendIcon
                  sx={{
                    color: palette.aoWhite,
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
