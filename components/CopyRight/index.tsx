import React from 'react';
import Wrapper from '../Layouts/Wrapper';
import styles from './CopyRight.module.scss';

function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <Wrapper background="#101114" justifycontent="center">
      <p className={styles.copyrightText}>
        © 2021 - {year} Antonio Sevillano - This project is under MIT license
      </p>
    </Wrapper>
  );
}

export default CopyRight;
