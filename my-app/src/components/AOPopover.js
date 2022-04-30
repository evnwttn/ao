import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";

export const AOPopover = ({ handleClick }) => {
  return (
    <>
      <AOPopoverRadio />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </>
  );
};
