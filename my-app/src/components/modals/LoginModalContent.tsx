import React, { useState, useRef } from "react";
import { Box, TextField, IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx, circularProgressSx } from "../../assets/theme";
import { UserLoginData } from "../../types";

export const LoginModalContent = () => {
  const axios = require("axios").default;
  const [userLoginData, setUserLoginData] = useState<UserLoginData>();
  const [formLoading, setFormLoading] = useState<Boolean>(false);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  return <Box sx={modalCenteredSx}>Login</Box>;
};
