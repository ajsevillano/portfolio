import React from 'react';
import styles from './Button.module.scss';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: JSX.Element | null;
  text: string;
  disabled?: boolean;
  onclick?: () => void;
}

const defaultProps: Props = {
  variant: 'primary',
  icon: null,
  text: 'default',
  disabled: false,
};

function Button({
  variant = defaultProps.variant,
  icon = defaultProps.icon,
  text = defaultProps.text,
  disabled = defaultProps.disabled,
  onclick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`${styles.Button} ${styles[variant as keyof typeof styles]}`}
      disabled={disabled}
    >
      {icon}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;
