import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { palette } from "../../assets/theme";

export const NewModalContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data.sessionTitle);
  console.log(errors);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="New Session"
        placeholder="New Session"
        variant="standard"
        size="small"
        color="divider"
        helperText="enter a session title to continue"
        margin="normal"
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
  );
};

{
  /* <>
{titleFormCompleted ? (
  <Box sx={{ boxStyle, fontStyle }}>
    Enter the titles of tracks you wish to include in the{" "}
    {sessionTitle + " "} session. You can always add more later.
    <br />
    <AddCircleOutline
      onClick={() => console.log(sessionTitle)}
      sx={{ color: palette.aoWhite, mr: 1, my: 0.5, cursor: "pointer" }}
    />
  </Box>
) : (
  <>
    <Box sx={{ boxStyle }}>
      <TextField
        required
        label="New Session"
        variant="standard"
        size="small"
        color="divider"
        helperText="enter a session title to continue"
        margin="normal"
        value={sessionTitle}
        onChange={handleSessionTitle}
      />
    </Box>
    <Box>
      <AddCircleOutline
        onClick={() => {
          sessionTitle !== ""
            ? isFormCompleted(true)
            : console.log(sessionTitle);
        }}
        sx={{ color: palette.aoWhite, mr: 1, my: 0.5, cursor: "pointer" }}
      />
    </Box>
  </>
)}
</> */
}

// const boxStyle = {
//   display: "flex",
//   alignItems: "flex-end",
//   justifyContent: "center",
// };

// const fontStyle = {
//   fontWeight: "400",
//   fontSize: "0.75rem",
//   lineHeight: "1.66",
//   fontFamily: "Noto Sans",
//   letterSpacing: "0.03333em",
//   color: palette.aoWhite,
// };
