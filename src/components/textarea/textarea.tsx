import styles from "./textarea.module.css";
import cx from "classnames";
import { TextareaProps } from "./textarea.types";

export const Textarea = ({ className, disabled, text, onChange }: TextareaProps) => {
  return (
      <textarea
        className={cx(styles.descriptionField, styles.input, className && className)}
        id="character-description"
        value={text}
        onChange={({ target: { value } }) => onChange(value)}
        disabled={disabled}
      />
  );
};
