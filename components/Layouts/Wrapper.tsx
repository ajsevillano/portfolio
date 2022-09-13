import React from 'react';
import styles from './Wrapper.module.scss';

interface Props {
  background: string;
  justifycontent: string;
  children: JSX.Element | JSX.Element[] | string;
}

function Wrapper({ children, background, justifycontent = 'center' }: Props) {
  return (
    <div
      className={styles.Wrapper}
      style={{
        backgroundColor: background,
        justifyContent: justifycontent,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
