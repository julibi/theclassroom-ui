import { ReactNode } from "react";

export type ModalProps = {
  onClose?: () => void;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  focusClassName?: string;
};
