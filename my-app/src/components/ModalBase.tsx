import React from "react";
import { Modal } from "@mui/material";
import { ModalText } from "../components/index";

export const ModalBase = ({
  open,
  handleClose,
  text,
  activeUser,
  setActiveUser,
  setModalType,
}: any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <>
        <ModalText
          prompt={text}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          setModalType={setModalType}
        />
      </>
    </Modal>
  );
};
