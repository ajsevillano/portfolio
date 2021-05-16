import styles from './Portfolio.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [repoData, setRepoData] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.project}>
        <img
          className={styles.img}
          src="https://dummyimage.com/716x448/2a2b57/ffffff.png&text=Portfolio"
          alt=""
        />
        <p className={styles.projectName}>Top videogames</p>
      </div>
      <div className={styles.project}>
        <img
          className={styles.img}
          src="https://dummyimage.com/716x448/2a2b57/ffffff.png&text=Portfolio"
          alt=""
        />
        <p className={styles.projectName}>catalogue-management-app</p>
      </div>
      <div className={styles.project}>
        <img
          className={styles.img}
          src="https://dummyimage.com/716x448/2a2b57/ffffff.png&text=Portfolio"
          alt=""
        />
        <p className={styles.projectName}>button-component-devchallenges</p>
      </div>
      <div className={styles.project}>
        <Image
          className={styles.img}
          src="/password.jpg"
          alt="Picture of the author"
          width={358}
          height={224}
        />
        <p className={styles.projectName}>password-generator</p>
      </div>
      <div className={styles.project}>
        <img
          className={styles.img}
          src="https://dummyimage.com/716x448/2a2b57/ffffff.png&text=Portfolio"
          alt=""
        />
        <p className={styles.projectName}>animated-portfolio</p>
      </div>
      <div className={styles.project}>
        <img
          className={styles.img}
          src="https://dummyimage.com/716x448/2a2b57/ffffff.png&text=Portfolio"
          alt=""
        />
        <p className={styles.projectName}>firebase-authentication</p>
      </div>
    </div>
  );
};

export default Portfolio;
