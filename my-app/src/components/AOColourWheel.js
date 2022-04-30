import { AOPopoverRadio } from "./AOPopoverRadio";
import { AOColorWheel } from "./AOColorWheel";

export const AOColourWheel = ({ handleClick }) => {
  return (
    <>
      <AOPopoverRadio />
      <AOColorWheel handleClick={(color) => handleClick(color)} />
    </>
  );
};
