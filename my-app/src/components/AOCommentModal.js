import { Box } from "@mui/system";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, modalBoxStyling } from "../assets/theme";

export const AOCommentModal = ({ cell }) => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <AOCommentContent cell={cell} />
    </Box>
  );
};
