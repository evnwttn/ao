import { Box } from "@mui/system";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, palette } from "../assets/theme";

export const AOCommentModal = () => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        bgcolor: palette.aoGrey,
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "33%",
        boxShadow: "0px 0px 50pt rbg(0 0 0 / 0.16)",
        p: "2.75vw",
      }}
    >
      <AOCommentContent />
    </Box>
  );
};
