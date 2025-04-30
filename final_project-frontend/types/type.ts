import { ReactNode } from "react";

// ClickButton
export const TAILWIND_BORDER_COLORS = {
  green: "border-[#2dcf6c]",
  grey: "border-[#494c51]",
  white: "border-white",
};
export const TAILWIND_HOVER_COLORS = {
  green: "hover:bg-[#2dcf6c]",
  white: "hover:bg-white",
};
export type ClickButtonProps = {
  value: string;
  borderColor: keyof typeof TAILWIND_BORDER_COLORS;
  hoverBgColor: keyof typeof TAILWIND_HOVER_COLORS;
  hoverTextColor?: "hover:text-black";
  onClick?: () => void;
};

// BackgroundVideo
export type BackgroundVideoProps = {
  src: string;
};

// header
export type CurrentDateTimeProps = {
  label: string;
  value: string;
  ml?: string;
};

// mainprojects
export type ProjectCardInfoProps = {
  subtitle: string;
  title: string;
  contribution: string;
  hashtags: string[];
  description: string;
};

// sideprojects
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
};

// techstacks
export type StackCardProps = {
  tech: string;
};
