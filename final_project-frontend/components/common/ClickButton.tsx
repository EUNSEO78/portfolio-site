
import {
  ClickButtonProps,
  TAILWIND_BORDER_COLORS,
  TAILWIND_HOVER_COLORS,
} from "@/types/type";
import React from "react";

const ClickButton = ({
  value,
  github,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  onClick,
}: ClickButtonProps) => {
  const isExternalLink =
    github?.startsWith("http://") || github?.startsWith("https://");

  return (
    <a
      href={github}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
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
    </a>
  );
};

export default ClickButton;
