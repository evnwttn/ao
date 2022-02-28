import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { aoWhite } from "../../assets/theme";

export const ContactModal = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <TextField
          id="session-title"
          label="New Session"
          variant="standard"
          size="small"
          color="divider"
          margin="normal"
        />
      </Box>
      <Box>
        <AddCircleOutline sx={{ color: aoWhite, mr: 1, my: 0.5 }} />
      </Box>
    </>
  );
};
