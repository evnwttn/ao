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

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="contact-name"
        placeholder="Name"
        variant="standard"
        {...register("Name", {})}
      />
      <TextField
        id="contact-email"
        placeholder="Email Address"
        variant="standard"
        {...register("Email Address", {})}
      />
      <TextField
        id="contact-message"
        placeholder="Message"
        variant="standard"
        {...register("Message", {})}
      />
      <IconButton type="submit">
        <SendIcon sx={{ color: palette.aoWhite, my: 0.5 }} />
      </IconButton>
    </Box>
  );
};
