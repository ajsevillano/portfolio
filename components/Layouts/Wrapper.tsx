import React from 'react';
import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.interface';

function Wrapper({
  elementType,
  id,
  children,
  background,
  justifycontent = 'center',
}: WrapperProps) {
  const Element = elementType || 'div';

  return (
    <Element
      id={id}
      className={styles.Wrapper}
      style={{
        backgroundColor: background,
        justifyContent: justifycontent,
      }}
    >
      {children}
    </Element>
  );
}

export default Wrapper;
