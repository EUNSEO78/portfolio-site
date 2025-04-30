import {
  ClickButtonProps,
  TAILWIND_BORDER_COLORS,
  TAILWIND_HOVER_COLORS,
} from "@/types/type";
import React from "react";

const ClickButton = ({
  value,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  onClick,
}: ClickButtonProps) => {
  return (
    <button
      type="button"
      className={`
        border py-3 px-6 rounded-xl 
        ${TAILWIND_BORDER_COLORS[borderColor]} 
        ${TAILWIND_HOVER_COLORS[hoverBgColor]} 
        ${hoverTextColor}
        transition duration-300
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ClickButton;
