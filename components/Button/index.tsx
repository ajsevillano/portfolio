import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface Props {
  variant: string;
  children: JSX.Element | JSX.Element[] | string;
}

function Button({ variant, children }: Props) {
  return (
    <button type="button" className={cx(styles.Button, styles[variant])}>
      {children}
    </button>
  );
}

export default Button;
