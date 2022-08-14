import { useState, useRef, useEffect } from "react";
import * as axios from "axios";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  const [formData, setFormData] = useState();
  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();

  useEffect(() => {
    formData &&
      axios
        .post("http://localhost:5000/contact", {
          formData,
        })
        .then(function (res) {
          console.log(res);
        })
        // .then((_data) => console.log(JSON.stringify(_data)))
        .catch(function (error) {
          console.log(error);
        });
  }, [formData]);

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
        <SendIcon
          sx={{
            ml: "25vw",
            mt: "1vh",
          }}
        />
      </IconButton>
    </Box>
  );
};
