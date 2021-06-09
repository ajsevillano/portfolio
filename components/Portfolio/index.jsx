//Styles
import styles from './Portfolio.module.scss';
//Utils
import axios from 'axios';
import { useState, useEffect } from 'react';
import { replaceImgWithError, filterRepositories } from './Portfolio.utils';

//Components
import Card from './Card';

const Portfolio = () => {
  const [repoData, setRepoData] = useState();
  const [demoWebUrl, setDemoWebUrl] = useState();

  const filterDemoUrl = (repoDataId) => {
    const demoUrlData = demoWebUrl.filter((data) => data.id === repoDataId);
    return demoUrlData.map((data) => data.url);
  };

  //Github repositories
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

  //Demos urls data file
  useEffect(async () => {
    try {
      const resp = await axios.get('/demourl.json');
      setDemoWebUrl(resp.data);
    } catch (err) {
      // Error Handler
      console.error(err);
    }
  }, []);

  return (
    <>
      <div className={styles.sectionTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map((data) => (
          <Card
            demoUrl={filterDemoUrl(data.id)}
            key={data.id}
            name={data.name}
            description={data.description}
            handleImgError={replaceImgWithError}
            url={data.html_url}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
