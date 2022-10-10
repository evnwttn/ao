import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { modalCenteredSx, modalFontSx, palette } from "../../assets/theme";
import SendIcon from "@mui/icons-material/Send";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserLoginData } from "../../types";

export const LoginModalContent = () => {
  const axios = require("axios").default;
  const [isNewUser, setIsNewUser] = useState<Boolean>(false);
  const [userLoginData, setUserLoginData] = useState<UserLoginData>();
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(true);

  const sendUserLoginData = () => {
    setUserLoginData({
      email: emailField?.current?.value!,
      password: passwordField?.current?.value!,
    });
  };

  useEffect(() => {
    userLoginData &&
      axios
        .post("http://localhost:5000/login", {
          ...userLoginData,
        })
        .then((_data: any) => console.log(JSON.stringify(_data)))
        .catch(function (error: any) {
          console.log(error);
        });
  }, [userLoginData, axios]);

  return (
    !isNewUser && (
      <Box sx={modalCenteredSx}>
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
                  {showPassword ? (
                    <VisibilityOff sx={{ color: palette.aoDivider }} />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          disableRipple
          sx={{ cursor: "default" }}
          onClick={sendUserLoginData}
        >
          <SendIcon
            sx={{
              ml: "23.5vw",
            }}
          />
        </IconButton>
        <Box sx={{ ...modalFontSx, mt: "1vw" }}>New User?</Box>
      </Box>
    )
  );
};
