import React from 'react';
import styles from './Button.module.scss';

interface Props {
  variant: string;
  icon?: JSX.Element;
  text?: string;
}

function Button({ variant, icon, text }: Props) {
  return (
    <button type="button" className={`${styles.Button} ${styles[variant]}`}>
      {icon}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;
