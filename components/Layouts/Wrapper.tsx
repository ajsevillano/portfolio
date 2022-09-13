import React from 'react';
import styles from './Wrapper.module.scss';

function Wrapper({ children, background, justifycontent = 'center' }: any) {
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
