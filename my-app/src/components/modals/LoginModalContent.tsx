import React, { useState, useRef } from "react";
import { Box, TextField, IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx, circularProgressSx } from "../../assets/theme";

export const LoginModalContent = () => {
  const axios = require("axios").default;
  const [userLoginData, setUserLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  return <Box sx={modalCenteredSx}>Login</Box>;
};
