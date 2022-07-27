import axios from "axios";
import { useForm } from "react-hook-form";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { modalCenteredSx } from "../../assets/theme";

export const ContactModalContent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const sendPost = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/",
      data: {
        secretMessage: "all your base are belong to us",
      },
    });
  };

  return (
    <Box
      // component="form"
      sx={modalCenteredSx}
      // onSubmit={handleSubmit(onSubmit)}
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
      <IconButton
        onClick={sendPost}
        disableRipple
        sx={{ cursor: "default" }}
        // type="submit"
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
