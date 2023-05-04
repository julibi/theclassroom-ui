import { FocusOn } from "react-focus-on";
import cx from "classnames";
import { ModalProps } from "./modal.types";
import { Button } from "../button";
import styles from "./modal.module.css";

// TODO: on outside click
export const Modal = ({
  className,
  contentClassName,
  focusClassName,
  children,
  onClose,
}: ModalProps) => {
  return (
    <div className={cx(styles.modal, className)}>
      <FocusOn
        onEscapeKey={onClose}
        onClickOutside={onClose}
        className={focusClassName}
      >
        <div className={cx(styles.content, contentClassName)}>
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
