import { ReactNode } from "react";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

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
export interface ClickButtonProps {
  value: string;
  borderColor: keyof typeof TAILWIND_BORDER_COLORS;
  hoverBgColor: keyof typeof TAILWIND_HOVER_COLORS;
  hoverTextColor?: "hover:text-black";
  onClick?: () => void;
}

// BackgroundVideo
export interface BackgroundVideoProps {
  src: string;
}

// header
export interface CurrentDateTimeProps {
  label: string;
  value: string;
  ml?: string;
}

// mainprojects
export interface ProjectCardInfoProps {
  subtitle: string;
  title: string;
  contribution: string;
  hashtags: string[];
  description: string;
}

// sideprojects
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
}

// techstacks
export interface StackCardProps {
  tech: string;
}

export type ProjectCardMainProps = BackgroundVideoProps & ProjectCardInfoProps;
