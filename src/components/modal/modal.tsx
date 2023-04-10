import { FocusOn } from "react-focus-on";
import { ModalProps } from "./modal.types";
import { Button } from "../button";
import styles from "./modal.module.css";

// TODO: on outside click
export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <FocusOn onEscapeKey={onClose} onClickOutside={onClose}>
        <div className={styles.content}>
          {onClose && (
            <Button className={styles.closeButton} onClick={onClose}>
              x
            </Button>
          )}
          {children}
        </div>
      </FocusOn>
    </div>
  );
};
