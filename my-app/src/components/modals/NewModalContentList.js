import { useState } from "react";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = (list) => {
  const [aoUpdate, setAoUpdate] = useState([]);

  return (
    <Box>
      {list.list.track !== undefined ? (
        <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
          {list.list.track.map((title) => (
            <ListItem
              key={title}
              secondaryAction={
                <IconButton
                  onClick={() => {
                    for (let i = 0; i < list.list.track.length; i++) {
                      if (list.list.track[i] === title) {
                        const toRemove = list.list.track[i];
                        list.list.track.splice(toRemove, 1);
                        setAoUpdate(list.list);
                        console.log(aoUpdate);
                      }
                    }
                  }}
                >
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${title}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <>{null}</>
      )}
    </Box>
  );
};
