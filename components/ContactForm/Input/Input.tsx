import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValidEmail: boolean;
}

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
