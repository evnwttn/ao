import { Box, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { palette } from "../../assets/theme";

export const ContactModalContent = () => {
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
        <br />
        <TextField
          id="contact-message"
          label="Message"
          multiline
          rows={3}
          size="small"
          variant="standard"
          color="divider"
          sx={{ width: "75%" }}
        />
        <br />
      </Box>
      <Box>
        <SendIcon sx={{ color: palette.aoWhite, my: 0.5 }} />
      </Box>
    </>
  );
};
