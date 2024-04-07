import React from 'react';
import styles from './Wrapper.module.scss';

interface Props {
  elementType?: React.ElementType;
  id?: string;
  background: string;
  justifycontent: string;
  children: JSX.Element | JSX.Element[] | string;
}

function Wrapper({
  elementType,
  id,
  children,
  background,
  justifycontent = 'center',
}: Props) {
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
