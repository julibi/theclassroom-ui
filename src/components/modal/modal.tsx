import { FocusOn } from "react-focus-on";
import { ModalProps } from "./modal.types";
import { Button } from "../button";
import styles from "./modal.module.css";

// TODO: on outside click
export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <FocusOn onEscapeKey={onClose}>
      <div className={styles.modal}>
        <div className={styles.content}>
          {onClose && (
            <Button className={styles.closeButton} onClick={onClose}>
              x
            </Button>
          )}
          {children}
        </div>
      </div>
    </FocusOn>
  );
};
