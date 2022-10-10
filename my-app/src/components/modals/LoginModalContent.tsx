import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  modalCenteredSx,
  modalFontSx,
  palette,
  circularProgressSx,
} from "../../assets/theme";
import SendIcon from "@mui/icons-material/Send";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserLoginData } from "../../types";

export const LoginModalContent = () => {
  const axios = require("axios").default;
  const [userLoginData, setUserLoginData] = useState<UserLoginData>();
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const [formLoading, setFormLoading] = useState<Boolean>(false);

  return (
    <Box sx={modalCenteredSx}>
      <Box sx={modalFontSx}>Login</Box>
      <TextField
        placeholder="Email"
        inputRef={emailField}
        variant="standard"
        margin="normal"
        sx={{ width: "26vw" }}
      />
      <TextField
        placeholder="Password"
        inputRef={passwordField}
        variant="standard"
        type={showPassword ? "password" : "text"}
        margin="normal"
        sx={{ width: "26vw" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
