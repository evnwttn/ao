import { useState } from "react";
import { Box } from "@mui/system";
import { commentSx } from "../../assets/theme";
import { TextField } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

export const AOCommentContent = ({ cell }) => {
  const [comment, setComment] = useState("");

  return (
    <Box>
      <Box>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={{ ...commentSx.inputProps }}
          sx={{
            ...commentSx.textField,
          }}
          margin="normal"
          variant="filled"
          multiline
          rows={6}
          value={comment}
        />
      </Box>
      <SaveRoundedIcon onClick={() => console.log(comment)} />
    </Box>
  );
};
