import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { modalCenteredSx, modalFontSx, palette } from "../../assets/theme";
import SendIcon from "@mui/icons-material/Send";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserLoginData } from "../../types";
import { LoginExistingUser } from "./LoginExistingUser";

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
      <LoginExistingUser
        emailField={emailField}
        passwordField={passwordField}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        isNewUser={isNewUser}
        setIsNewUser={setIsNewUser}
        sendUserLoginData={sendUserLoginData}
      />
    )
  );
};
