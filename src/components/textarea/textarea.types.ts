import { ChangeEvent } from "react";

export type TextareaProps = {
  disabled?: boolean;
  text: string;
  onChange: (x: string) => void;
  className?: string;
};
