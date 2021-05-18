import styles from './Portfolio.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [repoData, setRepoData] = useState([]);

  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = '/portfolio-default.png';
  };

  useEffect(async () => {
    try {
      const resp = await axios.get(
        'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=6'
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
          <img
            className={styles.img}
            src={`/${data.name}.png`}
            alt={data.name}
            onError={replaceImgWithError}
            alt="foo"
          />
          <p className={styles.projectName}>{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
