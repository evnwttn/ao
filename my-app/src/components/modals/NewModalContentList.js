import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette, modalCenteredSx } from "../../assets/theme";

export const NewModalContentList = ({ data, onClick }) => {
  return (
    <Box sx={{ ...modalCenteredSx, my: "1vw" }}>
      <List
        sx={{
          width: "28vw",
          maxHeight: "11vw",
          overflow: "auto",
        }}
      >
        {data &&
          data.map((title, number) => {
            return (
              <ListItem
                key={`${title}.${number}`}
                sx={{ bgcolor: palette.aoBlack }}
                secondaryAction={
                  <IconButton onClick={() => onClick(title)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={title} />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};
