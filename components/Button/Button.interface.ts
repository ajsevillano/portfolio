export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: JSX.Element | null;
  text: string;
  disabled?: boolean;
  onclick?: (e: any) => void;
}
