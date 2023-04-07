import { ReactChild } from "react";

export type ModalProps = {
  onClose?: () => void;
  children: ReactChild;
};
