import { MouseEventHandler } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: JSX.Element | null;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}
