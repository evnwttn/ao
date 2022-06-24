import { Modal } from "@mui/material";
import { ModalText } from "../components/ModalText";

export const ModalBase = ({ open, handleClose, text }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <ModalText prompt={text} />
    </Modal>
  );
};
