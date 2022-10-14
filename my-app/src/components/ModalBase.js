import { Modal } from "@mui/material";
import { ModalText } from "../components/ModalText";

export const ModalBase = ({
  open,
  handleClose,
  text,
  userDataVerified,
  setUserDataVerified,
  setModalType,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <>
        <ModalText
          prompt={text}
          userDataVerified={userDataVerified}
          setUserDataVerified={setUserDataVerified}
          setModalType={setModalType}
        />
      </>
    </Modal>
  );
};
