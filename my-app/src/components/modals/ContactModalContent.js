import { useForm } from "react-hook-form";
import * as axios from "axios";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(`sending...`);
  //   axios
  //     .post("http://localhost:3005/contact", data)
  //     .then((_data) => console.log(JSON.stringify(_data)));
  // };

  const onSubmit = (data) => {
    console.log(`sending...`);
    axios
      .post("/contact", data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
