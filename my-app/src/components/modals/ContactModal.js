import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { aoWhite } from "../../assets/theme";

export const ContactModal = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          id="contact-name"
          label="Your name"
          variant="standard"
          size="small"
          color="divider"
          margin="dense"
          sx={{ width: "75%" }}
        />
        <br />
        <TextField
          id="contact-email"
          label="email address"
          variant="standard"
          size="small"
          color="divider"
          sx={{ width: "75%" }}
        />
      </Box>
      <Box>
        <AddCircleOutline sx={{ color: aoWhite, my: 0.5 }} />
      </Box>
    </>
  );
};
