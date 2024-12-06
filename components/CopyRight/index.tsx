import React from 'react';
import { currentYear } from '../../utils/dates.utils';
import Wrapper from '../Layouts/Wrapper';
import styles from './CopyRight.module.scss';

function CopyRight() {
  return (
    <Wrapper elementType="footer" background="#101114" justifycontent="center">
      <p className={styles.copyrightText}>
        © 2021 - {currentYear} Antonio Sevillano - This project is under MIT
        license
      </p>
    </Wrapper>
  );
}

export default CopyRight;
