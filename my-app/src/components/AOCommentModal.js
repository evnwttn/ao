import { Box } from "@mui/system";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, modalBoxStyling } from "../assets/theme";

export const AOCommentModal = () => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <AOCommentContent />
    </Box>
  );
};
