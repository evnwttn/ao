import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  const { register, handleSubmit } = useForm();
  const [postData, setPostData] = useState();
  const onSubmit = (data) => setPostData({ ...data });
  const response = axios.post("http://localhost:3005/contact");

  // useEffect(() => {
  //   const response = axios.post("http://localhost:3005/contact");
  //   console.log(JSON.stringify(response));
  //   const sendPost = () => {
  //     axios
  //       .post("http://localhost:3005/contact", { data: postData })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };

  //   postData && sendPost();
  // }, [postData]);

  useEffect(() => {
    postData && console.log(JSON.stringify(response));
  }, [postData, response]);

  return (
    <Box
      component="form"
      sx={modalCenteredSx}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder="Name"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Name", {})}
      />
      <TextField
        placeholder="Email Address"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Email Address", {})}
      />
      <TextField
        placeholder="Message"
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
        {...register("Message", {})}
      />
      <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
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
