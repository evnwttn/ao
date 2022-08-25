import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { palette, modalCenteredSx, circularProgressSx } from "../../assets/theme";

export const ContactModalContent = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = useState<{name: string; email: string; message: string}>({
      name: '',
      email: '',
      message: '',
    });    
    const [formLoading, setFormLoading] = useState<Boolean>(false);
    const nameField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);
    const messageField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (formData.message !== '') {
      setFormLoading(true);
      axios
        .post("http://localhost:5000/contact", {
          ...formData,
        })
        .then((_data: any) => console.log(JSON.stringify(_data)))
        .catch(function (error: any) {
          console.log(error);
        });
    }
  }, [formData, axios]);

  useEffect(() => {
   setTimeout(() => {
      if (formLoading) {
        setFormLoading(false);
      }
    }, 2250);
  }, [formLoading]);   

  return (
    <Box sx={modalCenteredSx}>
      <TextField
        placeholder="Name"
        inputRef={nameField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <TextField
        placeholder="Email Address"
        inputRef={emailField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <TextField
        placeholder="Message"
        inputRef={messageField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <IconButton
        disableRipple
        sx={{ cursor: "default" }}
        onClick={() => 
          setFormData({
            name: nameField?.current?.value!,
            email: emailField?.current?.value!,
            message: messageField?.current?.value!,
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
    </Box>  )

}