import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.interface';

function Button({
  variant = 'primary',
  icon = null,
  text,
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className={`${styles.Button} ${styles[variant as keyof typeof styles]}`}
      disabled={disabled}
    >
      {icon}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;
