import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.interface';

function Input({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  isValidEmail,
}: InputProps) {
  return (
    <input
      className={!isValidEmail ? styles.inputError : styles.input}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
