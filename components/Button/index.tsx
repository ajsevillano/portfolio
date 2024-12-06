import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.interface';

const defaultProps: ButtonProps = {
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
}: ButtonProps) {
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
