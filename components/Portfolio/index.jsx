import styles from './Portfolio.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { replaceImgWithError, filterRepositories } from './Portfolio.utils';

//Components
import Card from './Card';

const Portfolio = () => {
  const [repoData, setRepoData] = useState();

  useEffect(async () => {
    try {
      const resp = await axios.get(
        `https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11`
      );
      setRepoData(filterRepositories(resp.data));
    } catch (err) {
      // Error Handler
      console.error(err);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {repoData?.map((data) => (
        <Card
          key={data.id}
          name={data.name}
          description={data.description}
          handleImgError={replaceImgWithError}
        ></Card>
      ))}
    </div>
  );
};

export default Portfolio;
