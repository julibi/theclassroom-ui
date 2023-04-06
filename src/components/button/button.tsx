import React, { MouseEventHandler } from "react";
import cx from "classnames";
import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export const Button = ({
  text,
  className,
  onClick,
  pending,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={cx(
        styles.button,
        (pending || disabled) && styles.disabled,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {pending ? "..." : text}
    </button>
  );
};
