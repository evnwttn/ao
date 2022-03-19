import { useState } from "react";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = ({ list, target }) => {
  const [aoUpdate, setAoUpdate] = useState([]);

  return (
    <Box>
      {list.target !== undefined ? (
        <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
          {list.target.map((title) => (
            <ListItem
              key={title}
              secondaryAction={
                <IconButton
                  onClick={() => {
                    for (let i = 0; i < list.target.length; i++) {
                      if (list.target[i] === title) {
                        const toRemove = list.target[i];
                        list.target.splice(toRemove, 1);
                        setAoUpdate(list.list);
                        console.log({ aoUpdate });
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
