export type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (evt?: React.ChangeEvent) => Promise<void> | void;
  pending?: boolean;
  disabled?: boolean;
  type?: string;
};
