import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { modalCenteredSx, modalFontSx, palette } from "../../assets/theme";
import SendIcon from "@mui/icons-material/Send";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginExistingUser = ({
  emailField,
  passwordField,
  showPassword,
  setShowPassword,
  isNewUser,
  setIsNewUser,
  sendUserLoginData,
}: any) => {
  return (
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
      <Box
        sx={{ ...modalFontSx, mt: "1vw", cursor: "pointer" }}
        onClick={() => setIsNewUser(!isNewUser)}
      >
        New User?
      </Box>
    </Box>
  );
};
