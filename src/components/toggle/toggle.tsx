import React from "react";
import cx from "classnames";
import { ToggleProps } from "./toggle.types";
import styles from "./toggle.module.css";

export const Toggle = ({
  isChecked,
  onChange,
  label,
  className,
}: ToggleProps) => {
  return (
    <div className={cx(styles.root, className)}>
      <label id="checkbox" className={styles.switch}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={(evt) => onChange(evt.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
      <span>{label}</span>
    </div>
  );
};
