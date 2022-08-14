// import { useForm } from "react-hook-form";
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
        .then(console.log("sending"))
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

// export const ContactModalContent = () => {
//   const { register, handleSubmit } = useForm();

// const onSubmit = (data) => {
//   console.log(`sending...`);
//   axios
//     .post("http://localhost:5000/contact", {
//       data,
//     })
//     .then((_data) => console.log(JSON.stringify(_data)))
//     .catch(function (error) {
//       console.log(error);
//     });
// };

//   return (
//     <Box
//       component="form"
//       sx={modalCenteredSx}
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <TextField
//         placeholder="Name"
//         variant="standard"
//         margin="normal"
//         sx={{ width: "28vw" }}
//         {...register("Name", {})}
//       />
//       <TextField
//         placeholder="Email Address"
//         variant="standard"
//         margin="normal"
//         sx={{ width: "28vw" }}
//         {...register("Email Address", {})}
//       />
//       <TextField
//         placeholder="Message"
//         variant="standard"
//         margin="normal"
//         sx={{ width: "28vw" }}
//         {...register("Message", {})}
//       />
//       <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
//         <SendIcon
//           sx={{
//             ml: "25vw",
//             mt: "1vh",
//           }}
//         />
//       </IconButton>
//     </Box>
//   );
// };
