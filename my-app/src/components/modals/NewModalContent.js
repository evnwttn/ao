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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { sessionTitle: "New Session" } });
  const onSubmit = (data) => {
    if (data.sessionTitle !== "") {
      setTitleFormCompleted(true);
      setAoSessionTitle(watch("sessionTitle"));
    } else {
      console.log(errors);
    }
  };

  return (
    <>
      {titleFormCompleted ? (
        <Box sx={{ boxStyle, fontStyle }}>
          Enter the titles of tracks you wish to include in the {aoSessionTitle}{" "}
          session. You can always add more later.
          <br />
          <AddCircleOutline
            onClick={() => console.log(aoSessionTitle)}
            sx={{ color: palette.aoWhite, mr: 1, my: 0.5, cursor: "pointer" }}
          />
        </Box>
      ) : (
        <>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="New Session"
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
