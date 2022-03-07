import React from "react";
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
      <input type="text" placeholder="Name" {...register("Name", {})} />
      <input
        type="email"
        placeholder="Email Address"
        {...register("Email Address", {})}
      />
      <input type="text" placeholder="Message" {...register("Message", {})} />

      <input type="submit" />
    </form>
  );
};

// <SendIcon sx={{ color: palette.aoWhite, my: 0.5 }} />;
