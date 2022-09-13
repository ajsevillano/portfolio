import React from 'react';
import Wrapper from '../Layouts/Wrapper';
import styles from './CopyRight.module.scss';

function CopyRight() {
  return (
    <Wrapper background="#101114">
      <p className={styles.copyrightText}>
        © 2022 Antonio Sevillano - This project is under MIT license
      </p>
    </Wrapper>
  );
}

export default CopyRight;
