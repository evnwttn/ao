import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { palette } from "../../assets/theme";

const boxStyle = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
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
  const [aoSessionTitle, setAoSessionTitle] = useState("");
  let trackNumber = 0;
  // let parameterNumber = 0;

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
    console.log(data);
    return <>Yolo</>;
  };

  const renderNewTrackField = () => {
    trackNumber++;
    return (
      <TextField
        variant="standard"
        margin="normal"
        autoComplete="off"
        helperText="Add Track"
        {...register(`track${trackNumber}`)}
      />
      // find appendchild react equivalent
    );
  };

  return (
    <>
      {titleFormCompleted ? (
        <Box
          component="form"
          sx={{ boxStyle, fontStyle }}
          onSubmit={handleSubmit(onSubmitTrack)}
        >
          Enter the titles of tracks you wish to include in the {aoSessionTitle}{" "}
          session. You can always add more later.
          <br />
          <TextField
            variant="standard"
            margin="normal"
            autoComplete="off"
            helperText="Add Track"
            {...register(`track${trackNumber}`)}
          />
          <br />
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
      ) : (
        <>
          <Box component="form" onSubmit={handleSubmit(onSubmitTitle)}>
            <TextField
              variant="standard"
              helperText="enter a session title to continue"
              margin="normal"
              autoComplete="off"
              {...register("sessionTitle", { required: true })}
            />
            <br />
            <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
              <SendIcon
                sx={{
                  color: palette.aoWhite,
                  cursor: "pointer",
                  my: 0.5,
                }}
              />
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
};
