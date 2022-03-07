import React from "react";
import { TextField, IconButton, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { palette } from "../../assets/theme";
import SendIcon from "@mui/icons-material/Send";

export const ContactModalContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const textFieldStyle = {
    width: "75%",
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="contact-name"
        placeholder="Name"
        variant="standard"
        margin="normal"
        sx={textFieldStyle}
        {...register("Name", {})}
      />
      <br />
      <TextField
        id="contact-email"
        placeholder="Email Address"
        variant="standard"
        margin="normal"
        sx={textFieldStyle}
        {...register("Email Address", {})}
      />
      <br />
      <TextField
        id="contact-message"
        placeholder="Message"
        variant="standard"
        margin="normal"
        sx={textFieldStyle}
        {...register("Message", {})}
      />
      <br />
      <IconButton sx={{ cursor: "default" }} type="submit">
        <SendIcon
          sx={{
            color: palette.aoWhite,
            cursor: "pointer",
            my: 0.5,
            ml: "16vw",
          }}
        />
      </IconButton>
    </Box>
  );
};
