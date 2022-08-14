import { useForm } from "react-hook-form";
import * as axios from "axios";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(`sending...`);
    axios
      .post("http://localhost:3005/contact", data)
      .then((_data) => console.log(JSON.stringify(_data)))
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

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
