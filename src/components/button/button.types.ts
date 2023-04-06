export type ButtonProps = {
  text: string;
  className?: string;
  onClick?: (evt: React.ChangeEvent) => Promise<void>;
  pending?: boolean;
  disabled?: boolean;
  type?: string;
};
