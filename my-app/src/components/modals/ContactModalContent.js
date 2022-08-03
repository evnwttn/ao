// import { useState } from "react";
// import { useForm } from "react-hook-form";
import * as axios from "axios";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  // const { register, handleSubmit } = useForm();
  // const [postData, setPostData] = useState();
  // const onSubmit = (data) => setPostData({ ...data });

  const sendPost = () => {
    const response = axios
      .post("http://localhost:3005/contact")
      .then((data) => console.log(JSON.stringify(data)));
  };

  return (
    <Box
      component="form"
      sx={modalCenteredSx}
      // onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder="Name"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        // {...register("Name", {})}
      />
      <TextField
        placeholder="Email Address"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        // {...register("Email Address", {})}
      />
      <TextField
        placeholder="Message"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        // {...register("Message", {})}
      />
      <IconButton
        disableRipple
        sx={{ cursor: "default" }}
        // type="submit"
        onClick={sendPost}
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
