import React from 'react';
import styles from './Button.module.scss';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: JSX.Element | null;
  text: string;
  onclick?: () => void;
}

const defaultProps: Props = {
  variant: 'primary',
  icon: null,
  text: 'default',
};

function Button({
  variant = defaultProps.variant,
  icon = defaultProps.icon,
  text = defaultProps.text,
  onclick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`${styles.Button} ${styles[variant as keyof typeof styles]}`}
    >
      {icon}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;
