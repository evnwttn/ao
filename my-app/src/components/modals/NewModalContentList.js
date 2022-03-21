import { useState, useEffect } from "react";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = ({ input, target, onClick }) => {
  return (
    <Box>
      {target === `track`
        ? console.log(`${target} is track amiright`)
        : target === `parameter`
        ? console.log(`${target} is parameter amiright`)
        : console.log("nada")}
    </Box>
  );
};

////////////////

// export const NewModalContentList = ({ aoOutput, target }) => {
//   const [toRemove, setToRemove] = useState();

//   useEffect(() => {
//     console.log(toRemove);
//   }, [toRemove]);

//   return (
//     <Box>
//       {aoOutput.track !== undefined ? (
//         <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
//           {aoOutput.track.map((title) => (
//             <ListItem
//               key={title}
//               secondaryAction={
//                 <IconButton onClick={() => setToRemove(title)}>
//                   <ClearIcon />
//                 </IconButton>
//               }
//             >
//               <ListItemText primary={`${title}`} />
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <>{null}</>
//       )}
//     </Box>
//   );
// };

// for (let i = 0; i < aoOutput.track.length; i++) {
//   if (aoOutput.track[i] === title) {
//     const toRemove = aoOutput.track[i];
//     aoOutput.track.splice(toRemove, 1);
//     setAoUpdate(aoOutput);
//     console.log({ aoUpdate });
