import { Modal } from "@mui/material";
import { AOCommentModal } from "./index";

export const AOCommentBase = ({
  cell,
  cellComment,
  open,
  handleClose,
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          cell={cell}
          cellComment={cellComment}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </>
    </Modal>
  );
};
