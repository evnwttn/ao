import React, { useState, useRef } from "react";
import { Box, TextField, IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  modalCenteredSx,
  modalFontSx,
  palette,
  circularProgressSx,
} from "../../assets/theme";
import { UserLoginData } from "../../types";

export const LoginModalContent = () => {
  const axios = require("axios").default;
  const [userLoginData, setUserLoginData] = useState<UserLoginData>();
  const [formLoading, setFormLoading] = useState<Boolean>(false);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  return (
    <Box sx={modalCenteredSx}>
      <Box sx={modalFontSx}>Login</Box>
      <TextField
        placeholder="Email"
        inputRef={emailField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <TextField
        placeholder="Password"
        inputRef={passwordField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <IconButton
        disableRipple
        sx={{ cursor: "default" }}
        onClick={() =>
          setUserLoginData({
            email: emailField?.current?.value!,
            password: passwordField?.current?.value!,
          })
        }
      >
        <CircularProgress
          size="2.33vw"
          sx={{
            ...circularProgressSx,
            color: formLoading === true ? palette.aoBlue : palette.aoGrey,
          }}
        />
        <SendIcon
          sx={{
            mt: "1vh",
          }}
        />
      </IconButton>
    </Box>
  );
};
