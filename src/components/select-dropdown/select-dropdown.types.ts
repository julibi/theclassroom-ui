import { SyntheticEvent } from "react";

export type SelectDropdownProps = {
  disabled: boolean;
  options: undefined | number[];
  onSelect: (x: SyntheticEvent<HTMLSelectElement, Event>) => void;
};
