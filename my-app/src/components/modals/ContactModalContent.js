import React from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
// import { palette } from "../../assets/theme";
// import SendIcon from "@mui/icons-material/Send";

export const ContactModalContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <input type="submit" />
    </form>
  );
};

// <SendIcon sx={{ color: palette.aoWhite, my: 0.5 }} />;
