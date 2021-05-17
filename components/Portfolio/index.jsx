import styles from './Portfolio.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(async () => {
    try {
      const resp = await axios.get(
        'https://api.github.com/users/ajsevillano/repos'
      );
      setRepoData(resp.data);
    } catch (err) {
      // Error Handler
      console.error(err);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {repoData.map((data) => (
        <div key={data.id} className={styles.project}>
          <Image
            className={styles.img}
            src={`/${data.name}.png`}
            alt={data.name}
            width={358}
            height={224}
          />
          <p className={styles.projectName}>{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
