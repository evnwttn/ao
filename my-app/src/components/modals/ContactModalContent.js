import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  palette,
  modalCenteredSx,
  circularProgressSx,
} from "../../assets/theme";

export const ContactModalContent = () => {
  const axios = require("axios").default;
  const [formData, setFormData] = useState();
  const [formLoading, setFormLoading] = useState(false);
  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();

  useEffect(() => {
    if (formData) {
      setFormLoading(true);
      axios
        .post("http://localhost:5000/contact", {
          ...formData,
        })
        .then((res) => console.log(res))
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [formData, axios]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formLoading) {
        setFormLoading(false);
      }
    }, 2250);
    return () => clearTimeout(timer);
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
            name: nameField.current.value,
            email: emailField.current.value,
            message: messageField.current.value,
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
